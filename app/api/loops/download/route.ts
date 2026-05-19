import { createReadStream, existsSync } from "fs";
import { mkdir, writeFile } from "fs/promises";
import { basename, resolve } from "path";
import { Readable } from "stream";
import { NextRequest, NextResponse } from "next/server";
import { getLoopKit } from "../../_lib/loop-kits";

const loopRoot = resolve(process.cwd(), "private", "loops");

export async function GET(request: NextRequest) {
  try {
    const kitSlug = request.nextUrl.searchParams.get("kit") || "";
    const lead = request.nextUrl.searchParams.get("lead") || "";
    const kit = getLoopKit(kitSlug);

    if (!kit || !lead) {
      return NextResponse.json({ error: "Missing loop kit or lead unlock" }, { status: 400 });
    }

    await mkdir(loopRoot, { recursive: true });

    const fileName = basename(kit.downloadFile);
    const filePath = resolve(loopRoot, fileName);

    if (!filePath.startsWith(loopRoot)) {
      return NextResponse.json({ error: "Invalid file path" }, { status: 400 });
    }

    if (!existsSync(filePath)) {
      const placeholder = [
        `${kit.title} - Free Loop Kit`,
        "",
        "Drop the real ZIP for this kit into:",
        `private/loops/${fileName}`,
        "",
        "This placeholder keeps the email unlock flow testable until the final loops are added."
      ].join("\n");
      await writeFile(filePath.replace(/\.zip$/i, ".txt"), placeholder, "utf8");
      const textStream = Readable.toWeb(createReadStream(filePath.replace(/\.zip$/i, ".txt"))) as ReadableStream;
      return new NextResponse(textStream, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Content-Disposition": `attachment; filename="${fileName.replace(/\.zip$/i, ".txt")}"`,
          "Cache-Control": "private, no-store"
        }
      });
    }

    const stream = Readable.toWeb(createReadStream(filePath)) as ReadableStream;
    return new NextResponse(stream, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${fileName.replace(/"/g, "")}"`,
        "Cache-Control": "private, no-store"
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not unlock loop kit" },
      { status: 500 }
    );
  }
}
