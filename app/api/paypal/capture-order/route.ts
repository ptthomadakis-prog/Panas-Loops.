import { NextResponse } from "next/server";
import { getPayPalAccessToken, paypalFetch } from "../../_lib/paypal";

export async function POST(request: Request) {
  try {
    const { orderId } = (await request.json()) as { orderId?: string };

    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    const accessToken = await getPayPalAccessToken();
    const response = await paypalFetch(
      `/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      },
      "capture PayPal order",
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: "PayPal capture failed", details: data }, { status: 502 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not capture PayPal order" },
      { status: 500 },
    );
  }
}
