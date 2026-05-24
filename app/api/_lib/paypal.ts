const paypalBaseUrls = {
  sandbox: "https://api-m.sandbox.paypal.com",
  live: "https://api-m.paypal.com",
};

export function paypalEnvironment() {
  return process.env.PAYPAL_ENV === "live" ? "live" : "sandbox";
}

export function paypalBaseUrl() {
  return paypalBaseUrls[paypalEnvironment()];
}

function describeError(error: unknown) {
  if (!(error instanceof Error)) {
    return String(error);
  }

  const cause = (error as Error & { cause?: unknown }).cause;
  if (cause instanceof Error && cause.message) {
    return `${error.message}: ${cause.message}`;
  }

  return error.message;
}

export async function paypalFetch(path: string, init: RequestInit, action: string) {
  try {
    return await fetch(`${paypalBaseUrl()}${path}`, init);
  } catch (error) {
    throw new Error(`Could not ${action}: ${describeError(error)}`);
  }
}

export async function getPayPalAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing PAYPAL_CLIENT_ID or PAYPAL_CLIENT_SECRET");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await paypalFetch(
    "/v1/oauth2/token",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    },
    "request PayPal access token",
  );

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(
        `PayPal credentials were rejected for PAYPAL_ENV=${paypalEnvironment()}. Use matching ${paypalEnvironment()} REST app credentials, or switch PAYPAL_ENV to the matching PayPal app environment.`,
      );
    }

    throw new Error(`PayPal token request failed: ${response.status}`);
  }

  const data = await response.json();
  if (!data.access_token) {
    throw new Error("PayPal token response did not include an access token");
  }

  return data.access_token as string;
}

export async function getPayPalOrder(orderId: string) {
  const accessToken = await getPayPalAccessToken();
  const response = await paypalFetch(
    `/v2/checkout/orders/${encodeURIComponent(orderId)}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    "look up PayPal order",
  );

  if (!response.ok) {
    throw new Error(`PayPal order lookup failed: ${response.status}`);
  }

  return response.json();
}
