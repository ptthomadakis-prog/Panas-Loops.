import { createReadStream, existsSync } from "fs";
import { basename, join, resolve } from "path";
import { Readable } from "stream";
import { NextRequest, NextResponse } from "next/server";
import { getPayPalOrder } from "../_lib/paypal";

const privateAudioRoot = resolve(process.cwd(), "private", "audio");

function paidFilesFromOrder(order: any) {
  const units = Array.isArray(order?.purchase_units) ? order.purchase_units : [];
  return new Set(
    units.flatMap((unit: any) => {
      const items = Array.isArray(unit.items) ? unit.items : [];
      return items.map((item: any) => item.sku).filter(Boolean);
    }),
  );
}

export async function GET(request: NextRequest) {
  try {
    const orderId = request.nextUrl.searchParams.get("orderId");
    const file = request.nextUrl.searchParams.get("file");

    if (!orderId || !file) {
      return NextResponse.json({ error: "Missing orderId or file" }, { status: 400 });
    }

    const safeFile = basename(file);
    const filePath = resolve(join(privateAudioRoot, safeFile));

    if (!filePath.startsWith(privateAudioRoot) || !existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const order = await getPayPalOrder(orderId);
    const paidFiles = paidFilesFromOrder(order);

    if (order.status !== "COMPLETED" || !paidFiles.has(safeFile)) {
      return NextResponse.json({ error: "Payment has not been verified for this file" }, { status: 403 });
    }

    const stream = Readable.toWeb(createReadStream(filePath)) as ReadableStream;
    return new NextResponse(stream, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": `attachment; filename="${safeFile.replace(/"/g, "")}"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not verify download" },
      { status: 500 },
    );
  }
}
