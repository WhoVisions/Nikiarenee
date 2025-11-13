export const env = {
  nikiaName: process.env.NEXT_PUBLIC_NIKIA_DISPLAY_NAME ?? "Nikia Renee",
  city: process.env.NEXT_PUBLIC_LOCATION_CITY ?? "Los Angeles",
  links: {
    igMain: process.env.NEXT_PUBLIC_LINK_INSTAGRAM_MAIN ?? "",
    igAlt: process.env.NEXT_PUBLIC_LINK_INSTAGRAM_ALT ?? "",
    twitch: process.env.NEXT_PUBLIC_LINK_TWITCH ?? "",
    twitter: process.env.NEXT_PUBLIC_LINK_TWITTER ?? "",
    hubzter: process.env.NEXT_PUBLIC_LINK_HUBZTER ?? "",
    siteMain: process.env.NEXT_PUBLIC_LINK_SITE_MAIN ?? "",
    ofPaid: process.env.NEXT_PUBLIC_LINK_OF_PAID ?? "",
    ofFree: process.env.NEXT_PUBLIC_LINK_OF_FREE ?? "",
    fansly: process.env.NEXT_PUBLIC_LINK_FANSLY ?? "",
    pocketStars: process.env.NEXT_PUBLIC_LINK_POCKETSTARS ?? ""
  }
};
