// Returns the current UYU -> USD exchange rate using a free, no-key FX API
// that publishes the same market mid-rates XE displays. Cached per request;
// the frontend keeps its own stale-time cache so this is only hit occasionally.

export default async function (req) {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/UYU", {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`FX upstream ${res.status}`);
    const data = await res.json();
    const rate = data?.rates?.USD;
    if (!rate || typeof rate !== "number") throw new Error("No USD rate in response");
    const fetchedAt = data?.time_last_update_unix
      ? new Date(data.time_last_update_unix * 1000).toISOString()
      : new Date().toISOString();
    return Response.json({
      from: "UYU",
      to: "USD",
      rate,
      fetched_at: fetchedAt,
      source: "open.er-api.com (XE-style live mid-market rate)",
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 502 });
  }
}