import { mkdir, appendFile } from "fs/promises";
import { resolve } from "path";
import { NextRequest, NextResponse } from "next/server";
import { getLoopKit } from "../_lib/loop-kits";

const leadsFile = resolve(process.cwd(), "private", "loop-leads.jsonl");

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();
    const producerName = String(body.producerName || "").trim();
    const kitSlug = String(body.kitSlug || "").trim();
    const optIn = Boolean(body.optIn);
    const kit = getLoopKit(kitSlug);

    if (!kit) {
      return NextResponse.json({ error: "Unknown loop kit" }, { status: 404 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
    }

    const leadId = crypto.randomUUID();
    const record = {
      id: leadId,
      email,
      producerName,
      optIn,
      kitSlug,
      kitTitle: kit.title,
      source: "loops-page",
      createdAt: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "",
      // This JSONL format can be replaced with Mailchimp, ConvertKit, Beehiiv, Klaviyo, or a database adapter later.
      integrations: { mailchimp: false, convertkit: false, beehiiv: false, klaviyo: false }
    };

    await mkdir(resolve(process.cwd(), "private"), { recursive: true });
    await appendFile(leadsFile, `${JSON.stringify(record)}\n`, "utf8");

    return NextResponse.json({
      ok: true,
      leadId,
      downloadUrl: `/api/loops/download?kit=${encodeURIComponent(kit.slug)}&lead=${encodeURIComponent(leadId)}`
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not save loop lead" },
      { status: 500 }
    );
  }
}
