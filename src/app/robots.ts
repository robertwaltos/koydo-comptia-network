import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/account/"] }],
    sitemap: "https://comptia-network.koydo.app/sitemap.xml",
    host: "https://comptia-network.koydo.app",
  };
}
