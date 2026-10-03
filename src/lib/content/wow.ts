/* WhizzoWow content. */

export interface SourceProduct {
  slug: string;
  name: string;
  promise: string;
  summary: string;
  specs: { term: string; detail: string }[];
}

export const SOURCE_PRODUCTS: SourceProduct[] = [
  {
    slug: "cotton",
    name: "Recycled Cotton Fibre",
    promise: "Mechanically recycled cotton, graded by staple length and colour.",
    summary:
      "Pre- and post-consumer recycled cotton fibre for open-end and blended ring spinning. Sourced against your staple, colour and contamination requirements.",
    specs: [
      { term: "Source", detail: "Pre-consumer cutting waste; post-consumer textile" },
      { term: "Staple", detail: "Graded; typical 8–22 mm effective length" },
      { term: "Colour", detail: "Natural, white, and sorted colour lots" },
      { term: "Certification", detail: "GRS / RCS-eligible supply; supplier declarations provided" },
      { term: "MOQ", detail: "Container-scale; sample lots for evaluation" },
    ],
  },
  {
    slug: "polyester",
    name: "Recycled Polyester Fibre",
    promise: "rPET staple fibre, GRS/RCS-eligible, by denier and cut length.",
    summary:
      "Recycled PET staple fibre from bottle-flake and textile feedstock, for spinning and nonwoven applications.",
    specs: [
      { term: "Feedstock", detail: "Bottle-flake; textile-to-fibre where specified" },
      { term: "Denier", detail: "1.2–6.0 D; solid and hollow-conjugate" },
      { term: "Cut length", detail: "32–64 mm" },
      { term: "Certification", detail: "GRS / RCS; OEKO-TEX on request" },
      { term: "MOQ", detail: "Container-scale" },
    ],
  },
  {
    slug: "blended",
    name: "Blended Recycled Fibres",
    promise: "Cotton/poly and custom blends matched to your spin system.",
    summary:
      "Pre-opened and blended recycled fibre packages — cotton/polyester and custom ratios — delivered ready for your card line.",
    specs: [
      { term: "Blends", detail: "50/50, 60/40, 80/20 and custom" },
      { term: "Inputs", detail: "Recycled cotton + rPET; virgin make-up fibre optional" },
      { term: "Prep", detail: "Opened and blended to order" },
      { term: "Certification", detail: "GRS / RCS on the recycled fraction" },
      { term: "MOQ", detail: "Container-scale" },
    ],
  },
  {
    slug: "yarns",
    name: "Recycled Yarns",
    promise: "Ring, OE and vortex yarns in recycled and blended compositions.",
    summary:
      "Finished recycled and blended yarns spun to your count and end use — weaving, knitting or technical.",
    specs: [
      { term: "Systems", detail: "Ring, open-end, air-jet / vortex" },
      { term: "Counts", detail: "Ne 6 – Ne 40, single and plied" },
      { term: "Composition", detail: "100% recycled and blended" },
      { term: "Certification", detail: "GRS / RCS; transaction certificates on shipment" },
      { term: "MOQ", detail: "Per count and colour; sample cones available" },
    ],
  },
];

export const BUYER_GROUPS = [
  { name: "Spinning mills", body: "The most upstream buyer — sourcing recycled cotton/polyester fibre as raw input to spin themselves." },
  { name: "Fabric manufacturers", body: "Mills that weave or knit yarn into fabric; typically buy the yarn line rather than raw fibre." },
  { name: "Garment exporters", body: "Manufacture finished clothing for export; buy recycled fabric or yarn, usually driven by a brand requirement passed down the chain." },
  { name: "Home textile manufacturers", body: "Same buying logic as garment exporters — for bedsheets, towels, curtains and upholstery." },
  { name: "Brands & buying houses", body: "The demand side driving the other buyer types. A buying house is often WhizzoWow's actual point of contact even when a brand sets the requirement." },
  { name: "Textile traders & importers", body: "Volume- and logistics-driven intermediaries able to absorb larger, less bespoke lots." },
];

export const SOURCING_STEPS = [
  { title: "Share Requirement", body: "Tell us the spec — fibre, composition, quantity, certification, delivery terms." },
  { title: "We Source", body: "We search our verified supplier network against your brief." },
  { title: "We Match & Verify", body: "Spec and certification checked before anything reaches you." },
  { title: "You Evaluate", body: "Samples and documentation for your assessment." },
  { title: "Move Toward Order", body: "Commercial terms, lot planning, and transaction certificates." },
];

export const APPLICATIONS = [
  { label: "Spinning", body: "Recycled fibre as raw input for ring, OE and vortex spinning." },
  { label: "Weaving", body: "Recycled and blended yarns for woven fabric programmes." },
  { label: "Knitting", body: "Circular and flat-knit yarn supply." },
  { label: "Garments", body: "Finished recycled fabric and yarn for apparel export programmes." },
  { label: "Home Textiles", body: "Bedsheets, towels, curtains and upholstery." },
  { label: "Export Programmes", body: "Volume lots for traders and importers." },
];

export const SOURCE_PRODUCT_IMAGES: Record<string, string> = {
  cotton: "/images/whatweserve1.png",
  polyester: "/images/whatweserve2.png",
  blended: "/images/whatweserve3.png",
  yarns: "/images/whatweserve4.png",
};
