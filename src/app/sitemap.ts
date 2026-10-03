import type { MetadataRoute } from "next";
import { ALL_ROUTES } from "@/lib/routes";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://whizzowow.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ALL_ROUTES.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" || path.endsWith("/news") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
