import { NextResponse } from "next/server";
import { paypalEnvironment } from "../../_lib/paypal";

export async function GET() {
  const clientId = process.env.PAYPAL_CLIENT_ID || "";
  const hasClientSecret = Boolean(process.env.PAYPAL_CLIENT_SECRET);

  return NextResponse.json({
    clientId,
    environment: paypalEnvironment(),
    configured: Boolean(clientId && hasClientSecret),
  });
}
