import { SOURCE_PRODUCTS } from "./content/wow";

/** Every crawlable route in the app — single source for the sitemap. */
export const ALL_ROUTES: string[] = [
  "/",
  "/what-we-source",
  ...SOURCE_PRODUCTS.map((p) => `/what-we-source/${p.slug}`),
  "/how-it-works",
  "/traceability",
  "/who-we-serve",
  "/applications",
  "/catalogue",
  "/contact",
];
