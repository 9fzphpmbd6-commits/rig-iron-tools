/**
 * Social media integration layer.
 * Placeholder functions for fetching tagged posts, embeds, etc.
 */

export type TaggedPost = {
  id: string;
  platform: "instagram" | "tiktok" | "x";
  username: string;
  caption: string;
  imageUrl: string;
  postUrl: string;
  timestamp: string;
};

/** Fetch latest posts tagged with #TexasHoleMakers — replace with real API */
export async function fetchLatestTaggedPosts(): Promise<TaggedPost[]> {
  // TODO: Integrate with Instagram Graph API, TikTok Display API, or X API
  // For now, return mocked data
  return [
    {
      id: "mock-1",
      platform: "instagram",
      username: "@gulfcoast_iron",
      caption: "Dropping holes all day with the Elite 50. #TexasHoleMakers",
      imageUrl: "",
      postUrl: "#",
      timestamp: "2026-03-14T10:30:00Z",
    },
    {
      id: "mock-2",
      platform: "tiktok",
      username: "@steelcrew_tx",
      caption: "SITEH3RO step reamer in action on the bridge job. #TexasHoleMakers",
      imageUrl: "",
      postUrl: "#",
      timestamp: "2026-03-13T15:45:00Z",
    },
    {
      id: "mock-3",
      platform: "x",
      username: "@tx_ironworker",
      caption: "New Commando 40 just arrived. Review coming soon. #TexasHoleMakers",
      imageUrl: "",
      postUrl: "#",
      timestamp: "2026-03-12T08:20:00Z",
    },
  ];
}

/** Generate a share URL for a product */
export function getShareUrl(platform: "x" | "facebook", productUrl: string, productName: string): string {
  const text = encodeURIComponent(`Check out the ${productName} at Texas Hole Makers!`);
  const url = encodeURIComponent(productUrl);
  if (platform === "x") return `https://x.com/intent/tweet?text=${text}&url=${url}`;
  return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
}
