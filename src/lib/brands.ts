export type BrandKey = "wow";

export interface Brand {
  key: BrandKey;
  name: string;
  domain: string;
  path: string;
  role: string;
  audience: string;
  creativeLine: string;
}

export const BRANDS: Record<BrandKey, Brand> = {
  wow: {
    key: "wow",
    name: "WhizzoWow — Recycle & Upscale",
    domain: "whizzowow.com",
    path: "/",
    role: "Recycled fibre/yarn sourcing platform. Spec-based B2B sourcing.",
    audience: "Spinning mills, exporters, buying houses, sourcing agents",
    creativeLine:
      "Recycled fibre and yarn, sourced with the rigor of a spec sheet, not a marketplace listing.",
  },
};
