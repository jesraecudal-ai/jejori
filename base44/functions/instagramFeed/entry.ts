import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

// Fetches the latest Instagram media (images) from the builder's connected
// Instagram Business account (SHARED connector). Public endpoint — no app-user auth.
export default async function(req) {
  try {
    const base44 = createClientFromRequest(req);
    const { accessToken } = await base44.asServiceRole.connectors.getConnection("instagram");

    // 1. Resolve the connected account's user id.
    const meRes = await fetch(
      `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
    );
    const me = await meRes.json();
    if (!me.id) {
      return Response.json({ error: "Instagram account not found", media: [] }, { status: 502 });
    }

    // 2. Fetch the latest media (images + carousels).
    const mediaRes = await fetch(
      `https://graph.instagram.com/v21.0/${me.id}/media?fields=id,media_type,media_url,permalink,caption,timestamp&limit=20&access_token=${accessToken}`
    );
    const mediaJson = await mediaRes.json();

    const media = (mediaJson.data || [])
      .filter((m) => (m.media_type === "IMAGE" || m.media_type === "CAROUSEL_ALBUM") && m.media_url)
      .slice(0, 12)
      .map((m) => ({
        id: m.id,
        image_url: m.media_url,
        permalink: m.permalink,
        caption: m.caption || "",
      }));

    return Response.json({ username: me.username, media });
  } catch (error) {
    return Response.json({ error: error.message, media: [] }, { status: 500 });
  }
}