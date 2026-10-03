/* WhizzoWow homepage content — one constant per section, in page order.
   Keeps src/app/wow/page.tsx as pure layout/structure; edit copy here
   instead. (Product *detail*-page content lives in ./wow.ts — this file
   is homepage-only.) */

export const WOW_HERO = {
  eyebrow: "WhizzoWow — Recycle & Upscale",
  headline: "Recycled Fibres & Yarns for Scalable Textile Production",
  sub: "Spec-based B2B sourcing — recycled cotton, polyester, blends and yarns, with documentation support.",
  ctas: [
    { label: "Explore Products", href: "/what-we-source", variant: "primary" as const },
  ],
  media: { src: "/video/wow-hero-video.mp4", alt: "Recycled fibre and yarn production", video: true },
};

export const WOW_PROBLEM = {
  eyebrow: "The Problem",
  items: [
    {
      title: "Fragmented Supplier Search",
      hook: "Too many suppliers. Too much searching.",
      body: "Finding the right recycled fibre or yarn often means looking across multiple suppliers and disconnected sources.",
    },
    {
      title: "Inconsistent Specifications",
      hook: "Every supplier speaks a different specification language.",
      body: "Comparing fibre type, denier, cut length, blend, colour and quality requirements becomes difficult when information isn't structured consistently.",
    },
    {
      title: "Certification & Documentation",
      hook: "The material may look right. The paperwork needs to match.",
      body: "Buyers need to check certifications, supplier declarations, quality records and other documentation before moving forward.",
    },
    {
      title: "Scattered Information",
      hook: "The information you need is rarely in one place.",
      body: "Specifications, certifications, availability and supplier details can be spread across different conversations, documents and sources.",
    },
    {
      title: "Difficult Supplier Comparison",
      hook: "Finding options is easy. Comparing them isn't.",
      body: "Without a common structure, evaluating multiple suppliers against the same requirement takes unnecessary time.",
    },
    {
      title: "From Search to Sourcing",
      hook: "A supplier match is only the beginning.",
      body: "Real sourcing requires moving from specifications to samples, commercials, documentation and an actual order.",
    },
  ],
};

export const WOW_WHAT_WE_SOURCE = {
  eyebrow: "What We Source",
  title: "Recycled Materials Sourced Around Your Requirements",
  cards: [
    {
      name: "Recycled Cotton Fibre",
      promise: "Recycled cotton, ready for the next production cycle.",
      bestFor: "Spinning · Textile Applications",
      href: "/what-we-source/cotton",
      image: "/images/whatweserve1.png",
    },
    {
      name: "Recycled Polyester Fibre",
      promise: "Performance materials, sourced to your specification.",
      bestFor: "Textile Manufacturing · Fibre Processing",
      href: "/what-we-source/polyester",
      image: "/images/whatweserve2.png",
    },
    {
      name: "Blended Recycled Fibres",
      promise: "Blends built around the requirements of your production.",
      bestFor: "Custom Textile Applications · Material Development",
      href: "/what-we-source/blended",
      image: "/images/whatweserve3.png",
    },
    {
      name: "Recycled Yarns",
      promise: "From recycled fibre to production-ready yarn.",
      bestFor: "Weaving · Knitting · Home Textiles · Garments",
      href: "/what-we-source/yarns",
      image: "/images/whatweserve4.png",
    },
  ],
};

export const WOW_HOW_IT_WORKS = {
  eyebrow: "How WhizzoWow Works",
  title: "From Waste to What's Next.",
  intro: "We help keep valuable textile materials in circulation — through recovery, recycling and upcycling.",
  image: "/images/wow-journey.webp",
  steps: [
    {
      title: "Recover",
      body: "Collect what still has value. Textile waste and discarded materials are identified and recovered for their next use.",
    },
    {
      title: "Transform",
      body: "Turn waste into material. Suitable materials are recycled or upcycled into usable fibres, yarns and other inputs.",
    },
    {
      title: "Reconnect",
      body: "Match materials with new possibilities. Recovered materials find applications across textiles, garments, home textiles and more.",
    },
    {
      title: "Circulate",
      body: "Keep materials moving. New products create new cycles — reducing waste and extending the life of valuable resources.",
    },
  ],
  tagline: "Recover. Transform. Reconnect. Repeat.",
};

export const WOW_WHY_WHIZZOWOW = {
  eyebrow: "Why WhizzoWow",
  title: "Making Circular Materials Move.",
  intro:
    "WhizzoWow connects recycled and upcycled materials with the businesses that can give them their next life. By bringing material discovery, supplier networks and real production requirements together, we help turn waste and surplus into opportunities for new products.",
  video: "/video/video-2.mp4",
};

export const WOW_WHO_WE_SERVE = {
  eyebrow: "Who We Serve",
  title: "Built for Businesses Moving Textiles Forward.",
  intro:
    "From fibre and fabric manufacturers to brands and exporters, WhizzoWow connects businesses with recycled and upcycled material opportunities suited to their production needs.",
  features: [
    { title: "Spinning Mills", body: "Recycled fibres and yarns for the next production cycle." },
    { title: "Fabric Manufacturers", body: "Circular materials for weaving, knitting and fabric development." },
    { title: "Garment Exporters", body: "Recycled inputs for responsible product and export programmes." },
    { title: "Home Textile Manufacturers", body: "Materials for products designed for everyday use and longer lifecycles." },
    { title: "Brands & Buying Houses", body: "Discover circular material options for new collections and sourcing programmes." },
    { title: "Traders & Importers", body: "Connect with recycled material supply across textile categories." },
  ],
  tagline: "Mills · Manufacturers · Exporters · Brands · Buying Houses · Traders",
};

export const WOW_APPLICATION_VIDEO = {
  eyebrow: "Application",
  title: "Where Circular Materials Become Products.",
  intro:
    "Recycled and upcycled fibres and yarns can move across the textile value chain — from spinning and fabric development to finished garments, home textiles and beyond.",
  video: "/video/application_bg_video.mp4",
  align: "right" as const,
};

export const WOW_APPLICATION_SELECTOR = {
  items: [
    { label: "Spinning", body: "Fibres transformed into yarns for new textile production.", video: "/video/sector-01-spinning.mp4" },
    { label: "Weaving", body: "Materials developed into fabrics for diverse textile applications.", video: "/video/sector-02-weaving.mp4" },
    { label: "Knitting", body: "Recycled yarns used to create flexible, functional textile products.", video: "/video/sector-03-knitting.mp4" },
    { label: "Garments", body: "Circular materials brought into apparel and export production.", video: "/video/sector-04-garments.mp4" },
    { label: "Home Textiles", body: "From recycled inputs to everyday textile products.", video: "/video/sector-05-home-textiles.mp4" },
    { label: "Technical Textiles", body: "Materials explored for performance-driven and specialised applications.", video: "/video/sector-06-technical-textiles.mp4" },
    { label: "Export Programmes", body: "Circular material sourcing for businesses serving global textile markets.", video: "/video/sector-07-export-programmes.mp4" },
  ],
  tagline: "Rethink. Remake. Renew.",
};

export const WOW_CONTACT_CTA = {
  title: "Contact",
  ctas: [{ label: "Contact Us", href: "/contact" }],
  image: "/images/wow-cta-bg.webp",
};
