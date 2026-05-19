import { NextResponse } from "next/server";
import { normalizeCartItems, type CartRequestItem } from "../../_lib/beat-catalog";
import { getPayPalAccessToken, paypalBaseUrl } from "../../_lib/paypal";

function money(cents: number) {
  return (cents / 100).toFixed(2);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { items?: CartRequestItem[] };
    const items = normalizeCartItems(body.items || []);

    if (!items.length) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    const itemTotal = items.reduce((total, item) => total + item.priceCents, 0);
    const accessToken = await getPayPalAccessToken();
    const response = await fetch(`${paypalBaseUrl()}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: `PANAS beat license - ${items.length} item${items.length === 1 ? "" : "s"}`,
            amount: {
              currency_code: "USD",
              value: money(itemTotal),
              breakdown: {
                item_total: {
                  currency_code: "USD",
                  value: money(itemTotal),
                },
              },
            },
            items: items.map((item) => ({
              name: item.displayTitle.slice(0, 127),
              sku: item.file.slice(0, 127),
              quantity: "1",
              unit_amount: {
                currency_code: "USD",
                value: money(item.priceCents),
              },
            })),
          },
        ],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: "PayPal order creation failed", details: data }, { status: 502 });
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Could not create PayPal order" },
      { status: 500 },
    );
  }
}

