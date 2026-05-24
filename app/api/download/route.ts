import { basename, extname } from "path";
import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/blob";
import { filesForPaidSku } from "../_lib/beat-catalog";
import { getPayPalOrder } from "../_lib/paypal";

function paidFilesFromOrder(order: any) {
  const units = Array.isArray(order?.purchase_units) ? order.purchase_units : [];
  const paidFiles = new Set<string>();

  units.forEach((unit: any) => {
    const items = Array.isArray(unit.items) ? unit.items : [];
    items.forEach((item: any) => {
      const sku = item.sku;
      if (!sku) return;

      // Keep old PayPal orders working if they stored a direct file name as the SKU.
      paidFiles.add(sku);
      filesForPaidSku(sku).forEach((file) => paidFiles.add(file));
    });
  });

  return paidFiles;
}

function contentType(file: string) {
  switch (extname(file).toLowerCase()) {
    case ".wav":
      return "audio/wav";
    case ".zip":
      return "application/zip";
    default:
      return "audio/mpeg";
  }
}

function blobPath(file: string) {
  return `beats/${basename(file)}`;
}

export async function GET(request: NextRequest) {
  try {
    const orderId = request.nextUrl.searchParams.get("orderId");
    const file = request.nextUrl.searchParams.get("file");

    if (!orderId || !file) {
      return NextResponse.json({ error: "Missing orderId or file" }, { status: 400 });
    }

    const safeFile = basename(file);
    const order = await getPayPalOrder(orderId);
    const paidFiles = paidFilesFromOrder(order);

    if (order.status !== "COMPLETED" || !paidFiles.has(safeFile)) {
      return NextResponse.json({ error: "Payment has not been verified for this file" }, { status: 403 });
    }

    const blob = await get(blobPath(safeFile), { access: "private", useCache: false });

    if (!blob || blob.statusCode !== 200 || !blob.stream) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    return new NextResponse(blob.stream, {
      headers: {
        "Content-Type": blob.blob.contentType || contentType(safeFile),
        "Content-Length": String(blob.blob.size),
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
