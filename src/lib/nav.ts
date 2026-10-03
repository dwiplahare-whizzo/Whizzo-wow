export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const NAV: NavItem[] = [
  {
    label: "What We Source",
    href: "/what-we-source",
    children: [
      { label: "Recycled Cotton Fibre", href: "/what-we-source/cotton" },
      { label: "Recycled Polyester Fibre", href: "/what-we-source/polyester" },
      { label: "Blended Recycled Fibres", href: "/what-we-source/blended" },
      { label: "Recycled Yarns", href: "/what-we-source/yarns" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Traceability & Documentation", href: "/traceability" },
  { label: "Who We Serve", href: "/who-we-serve" },
  { label: "Applications", href: "/applications" },
  { label: "Contact", href: "/contact" },
];
