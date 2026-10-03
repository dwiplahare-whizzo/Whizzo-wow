/* WhizzoWow interior-page content (navbar pages). Homepage copy lives in
   ./wow-home.ts; product spec rows live in ./wow.ts. Everything here is
   page-specific detail that does NOT repeat the homepage sections. */

/* ------------------------------------------------------------------ */
/* What We Source — index                                              */
/* ------------------------------------------------------------------ */

export const SOURCE_INTRO = [
  "WhizzoWow sources recycled fibre and yarn the way a mill's purchasing team writes a requisition: by specification. Instead of browsing listings, you describe the material you need to run, and we search a verified supplier network for lots that match.",
  "The four product lines below sit at different points on the same chain. Recycled cotton and polyester fibre are raw inputs for your own spinning line. Blended fibre is pre-opened and pre-mixed so it can go straight onto the card. Recycled yarn is the finished intermediate for weaving and knitting.",
];

export const SOURCE_COMPARISON = {
  columns: ["Product line", "Form", "Typical input", "Defined by", "Goes into"],
  rows: [
    ["Recycled Cotton Fibre", "Loose fibre, baled", "Cutting waste, textile waste", "Staple length, colour, contamination", "Open-end and blended ring spinning"],
    ["Recycled Polyester Fibre", "Staple fibre, baled", "Bottle flake, textile feedstock", "Denier, cut length, solid or hollow", "Spinning, nonwovens, fill"],
    ["Blended Recycled Fibres", "Pre-opened blended fibre", "Recycled cotton + rPET (+ virgin make-up)", "Blend ratio, preparation level", "Card line, ready to spin"],
    ["Recycled Yarns", "Cones, finished yarn", "Recycled and blended fibre", "Count, system, ply, composition", "Weaving, knitting, technical"],
  ],
};

export const SOURCE_BRIEF = {
  title: "What a good sourcing brief contains",
  intro:
    "The faster the brief is specific, the faster supply can be matched. These are the parameters we ask for, grouped by what they decide.",
  columns: [
    {
      title: "Material",
      items: [
        "Fibre or yarn type and composition",
        "Blend ratio and tolerance, if blended",
        "Recycled content required (pre- vs post-consumer)",
        "Virgin make-up fibre allowed or not",
      ],
    },
    {
      title: "Physical specification",
      items: [
        "Staple or cut length; denier or count",
        "Colour requirement and shade tolerance",
        "Contamination and foreign-matter limits",
        "Spin system the lot is meant for",
      ],
    },
    {
      title: "Commercial",
      items: [
        "Quantity per lot and total programme size",
        "Delivery window and destination",
        "Packing and shipment terms",
        "Target price band, where known",
      ],
    },
    {
      title: "Documentation",
      items: [
        "GRS / RCS eligibility",
        "OEKO-TEX Standard 100, if required",
        "Brand-specific compliance forms",
        "Test reports expected against the spec",
      ],
    },
  ],
};

export const SOURCE_PROCESS = [
  { title: "Brief received", body: "We confirm the specification and flag anything that is ambiguous or unrealistic before searching." },
  { title: "Supply searched", body: "The brief is run against verified suppliers, filtered on spec and certification scope." },
  { title: "Candidates compared", body: "Shortlisted lots are put side by side on the same parameters, not on each supplier's own terms." },
  { title: "Samples evaluated", body: "Sample lots and documents reach you for testing on your own line." },
  { title: "Order prepared", body: "Terms, lot planning and transaction certificates are set up once the sample is approved." },
];


/* ------------------------------------------------------------------ */
/* What We Source — product detail pages (keyed by slug)               */
/* ------------------------------------------------------------------ */

export interface ProductDetail {
  overview: string[];
  /** "What you define" parameter table: parameter / what it controls. */
  parameters: { term: string; detail: string }[];
  grades: { columns: string[]; rows: string[][] };
  endUses: { title: string; items: string[] };
  considerations: string[];
  documents: string[];
}

export const PRODUCT_DETAIL: Record<string, ProductDetail> = {
  cotton: {
    overview: [
      "Recycled cotton fibre is produced by mechanically opening cotton fabric, yarn waste or garment offcuts back into loose fibre. The process shortens the fibre, which is why staple length is the single most important number on a recycled cotton specification.",
      "Pre-consumer material comes from cutting rooms and spinning waste and tends to be cleaner and more colour-consistent. Post-consumer material comes from used textiles and offers a stronger recycled-content story but needs closer attention to contamination and sorting.",
      "Because recycled cotton is short, it is most often spun open-end, or blended with longer fibre for ring spinning. We source against the system you intend to run, not just against a generic grade.",
    ],
    parameters: [
      { term: "Staple length", detail: "Decides which spin system the fibre is suitable for and how much longer fibre it must be blended with." },
      { term: "Colour", detail: "Sorted lots avoid dyeing for dark shades; natural and white lots keep dyeing options open." },
      { term: "Contamination", detail: "Limits for hard waste, metal, non-cotton content and seam residue protect machinery and yarn quality." },
      { term: "Recycled source", detail: "Pre-consumer or post-consumer, which changes both the certification claim and the cleanliness." },
      { term: "Packing", detail: "Baled format and bale weight for your handling and opening line." },
    ],
    grades: {
      columns: ["Variant", "Source", "Colour approach", "Best suited to"],
      rows: [
        ["Natural / white", "Pre-consumer cutting waste", "Undyed, light shade freedom", "Light and dyed-to-order yarn"],
        ["Sorted colour", "Pre- or post-consumer", "Sorted by shade family", "Melange and dark-shade yarn without re-dyeing"],
        ["Mixed post-consumer", "Used textile", "Blended shade, greys and mélanges", "Utility yarn, nonwoven, filling"],
      ],
    },
    endUses: {
      title: "Where it is used",
      items: ["Open-end yarn for denim, towelling and knit fabric", "Blended ring-spun yarn with longer-staple virgin or recycled fibre", "Nonwoven and wadding", "Industrial wipes and utility textiles"],
    },
    considerations: [
      "Shorter fibre generally means lower yarn strength, so blending ratio matters.",
      "Dark and mélange shades are a natural fit; bright whites are limited by the source.",
      "Ask for a sample lot opened on your own line before committing to volume.",
    ],
    documents: ["Supplier declaration and scope certificate", "GRS / RCS transaction certificate on shipment", "Lot and batch identification", "Test report against agreed specification"],
  },
  polyester: {
    overview: [
      "Recycled polyester staple fibre (rPET) is made by cleaning and melting PET bottle flake, or textile-to-fibre feedstock, and extruding it back into fibre that is cut to length. It is the largest category of recycled synthetic fibre in textiles.",
      "Unlike recycled cotton, rPET is a manufactured fibre, so the properties are controlled and repeatable: denier, cut length, cross-section and lustre are all specified up front, and the lot should match them closely.",
      "The same specification discipline as virgin polyester applies. What changes is the documentation: the buyer needs proof of recycled feedstock, so certification scope matters as much as fibre quality.",
    ],
    parameters: [
      { term: "Denier", detail: "Fibre thickness. Controls handle, yarn count range and end use." },
      { term: "Cut length", detail: "Matches the fibre to the spinning system: cotton-system or woollen-system lengths." },
      { term: "Cross-section", detail: "Solid, hollow or conjugate. Hollow adds loft and insulation; conjugate adds crimp and bounce." },
      { term: "Lustre", detail: "Bright, semi-dull or full-dull appearance." },
      { term: "Feedstock", detail: "Bottle flake or textile-to-fibre, which matters for the recycled claim." },
    ],
    grades: {
      columns: ["Type", "Denier band", "Cut length", "Typical use"],
      rows: [
        ["Solid, fine", "1.2–1.5 D", "32–38 mm", "Cotton-system spinning, blended with cotton"],
        ["Solid, medium", "1.5–3.0 D", "38–51 mm", "Spun yarn, nonwoven, felts"],
        ["Hollow-conjugate", "3.0–6.0 D", "51–64 mm", "Fill, quilting, nonwoven loft"],
      ],
    },
    endUses: {
      title: "Where it is used",
      items: ["Spun yarn for apparel and home textiles", "Blends with cotton or viscose", "Fill and wadding for bedding and jackets", "Nonwoven and needle-punched products"],
    },
    considerations: [
      "Bottle-flake rPET and textile-to-fibre rPET are different recycled claims; specify which you need.",
      "Dyeing behaviour should be validated on a sample before committing to volume.",
      "Hollow and conjugate fibres are priced differently from solid; confirm before quoting.",
    ],
    documents: ["GRS / RCS scope certificate and declaration", "OEKO-TEX Standard 100 on request", "Transaction certificate on shipment", "Lot test report: denier, length, tenacity"],
  },
  blended: {
    overview: [
      "Blended recycled fibre is delivered pre-opened and pre-mixed to a defined ratio, so it can go directly onto your blowroom or card line. It removes a blending step and a source of variation from your process.",
      "The most common package is recycled cotton with recycled polyester, in ratios such as 50/50, 60/40 and 80/20. Custom ratios are built to the requirement, including a virgin make-up fibre where strength or appearance calls for it.",
      "Blending is where consistency is won or lost. We specify the preparation level, the tolerance on the ratio, and the way the lot is sampled so that every bale behaves like the sample.",
    ],
    parameters: [
      { term: "Blend ratio", detail: "Composition by weight, and the tolerance you will accept either side." },
      { term: "Components", detail: "Which recycled cotton and rPET grades go in, and whether virgin fibre is allowed." },
      { term: "Preparation level", detail: "Loose-blended, opened, or pre-carded, depending on your line." },
      { term: "Colour", detail: "Shade family for the cotton fraction and whether rPET is natural or coloured." },
      { term: "Consistency", detail: "How lots are sampled across bales to confirm the ratio." },
    ],
    grades: {
      columns: ["Blend", "Composition", "Character", "Typical outcome"],
      rows: [
        ["50 / 50", "Recycled cotton / rPET", "Balanced strength and handle", "Everyday knit and woven yarn"],
        ["60 / 40", "Cotton-led", "Cotton hand with better strength", "Knitwear, towelling, casual wear"],
        ["80 / 20", "Strongly cotton", "Cotton hand, modest poly support", "Denim and heavier fabrics"],
        ["Custom", "Defined by you", "Matched to spin system and end use", "Programme-specific"],
      ],
    },
    endUses: {
      title: "Where it is used",
      items: ["Mélange and heather yarns", "Open-end yarn for knit and denim", "Home textiles: blankets, towels", "Programmes needing a fixed recycled-content figure"],
    },
    considerations: [
      "The recycled fraction is what GRS / RCS certifies; the virgin make-up fraction, if any, is stated separately.",
      "Consistency across lots is the main quality risk; agree a sampling plan with the brief.",
      "A trial spin on your own line is recommended before scaling.",
    ],
    documents: ["GRS / RCS certification on the recycled fraction", "Blend declaration with measured ratio", "Lot and batch identification", "Supplier scope certificates"],
  },
  yarns: {
    overview: [
      "Recycled yarn is the finished intermediate: recycled or blended fibre already spun to a count, system and ply, ready to weave or knit. It suits buyers who do not spin themselves, such as fabric manufacturers, knitters and garment exporters.",
      "Yarn is specified by count, spinning system, twist and composition. Different systems give different characters: ring spun is smooth and strong, open-end is bulkier and more economical, vortex is clean and low in hairiness.",
      "We match the yarn to the downstream process. A warp yarn for weaving and a yarn for circular knitting have different requirements even at the same count.",
    ],
    parameters: [
      { term: "Count", detail: "Yarn fineness, expressed in Ne, in single or plied form." },
      { term: "Spinning system", detail: "Ring, open-end or air-jet / vortex, each with its own strength, hairiness and cost." },
      { term: "Twist and ply", detail: "Controls strength, handle and fabric appearance." },
      { term: "Composition", detail: "100% recycled or blended, with the recycled fraction stated." },
      { term: "Package", detail: "Cone type and weight to suit your winding, knitting or weaving machine." },
    ],
    grades: {
      columns: ["System", "Character", "Counts (Ne)", "Typical use"],
      rows: [
        ["Ring spun", "Strong, smooth, finer counts", "10–40", "Fine knits, shirting, premium woven"],
        ["Open-end (OE)", "Bulkier, economical, coarser counts", "6–20", "Denim, towelling, heavy knit"],
        ["Air-jet / vortex", "Low hairiness, clean, fast production", "20–40", "Knit and woven where pilling matters"],
      ],
    },
    endUses: {
      title: "Where it is used",
      items: ["Weaving: warp and weft for denim, canvas, shirting", "Circular and flat knitting", "Home textiles: towels, bedsheets, upholstery", "Technical and industrial fabrics"],
    },
    considerations: [
      "State the downstream process: warp, weft, knit. It changes the yarn requirement.",
      "Colour is quoted per count and colour; sample cones are available to test on your machine.",
      "Recycled yarns generally carry a lower tenacity than virgin; the specification should reflect your tolerance.",
    ],
    documents: ["GRS / RCS certification with transaction certificate", "Yarn test report: count, CV, twist, strength", "Composition declaration", "Lot and batch identification"],
  },
};

/* ------------------------------------------------------------------ */
/* Traceability & Documentation                                        */
/* ------------------------------------------------------------------ */

export const TRACE_INTRO = [
  "In recycled textiles, the claim is only as good as the evidence behind it. A brand that has promised customers a recycled-content figure needs paperwork from every tier below it, and a mill that cannot produce that paperwork cannot supply that brand.",
  "That is why WhizzoWow treats documentation as part of the product. The specification, the certification scope and the supporting records are checked together, before material is shipped, not assembled after a buyer asks.",
];

export const TRACE_STANDARDS = {
  columns: ["Standard / document", "What it shows", "When it is provided"],
  rows: [
    ["GRS — Global Recycled Standard", "Recycled content, chain of custody, plus social and environmental processing criteria", "Eligible supply; scope certificate and transaction certificate"],
    ["RCS — Recycled Claim Standard", "Recycled content and chain of custody through the supply chain", "Eligible supply; scope certificate and transaction certificate"],
    ["OEKO-TEX Standard 100", "Harmful-substance testing of the finished material", "On request, where applicable to the product"],
    ["Transaction certificate", "Links a specific shipment to certified input material", "Issued on shipment"],
    ["Supplier declaration and scope certificate", "That the supplier is certified for the product being sold", "Before samples are released"],
    ["Lot / batch identification", "Traceability of a bale or cone back to a production lot", "With every lot"],
    ["Test report", "Measured values against the agreed specification", "With samples and with shipment"],
  ],
};

export const TRACE_DOSSIER = [
  {
    title: "Before samples",
    items: [
      "Supplier scope certificate checked against the product",
      "Supplier declaration reviewed",
      "Specification confirmed in writing",
    ],
  },
  {
    title: "With samples",
    items: [
      "Lot and batch identification on every sample",
      "Test report against the agreed spec",
      "Composition declaration",
    ],
  },
  {
    title: "With shipment",
    items: [
      "Transaction certificate issued on shipment",
      "Final test report for the shipped lot",
      "Packing list tied to batch identifiers",
    ],
  },
];

export const TRACE_FLOW = [
  { title: "Specify", body: "Certification and documentation requirements are captured alongside the material spec, so they shape the supplier search." },
  { title: "Verify", body: "Supplier scope certificates and declarations are checked against the brief. Suppliers outside scope are removed early." },
  { title: "Evaluate", body: "Samples ship with lot identification and test reports, so your own testing and the documents point at the same lot." },
  { title: "Certify", body: "Transaction certificates are issued on shipment, closing the paper trail for that consignment." },
];


/* ------------------------------------------------------------------ */
/* Who We Serve                                                        */
/* ------------------------------------------------------------------ */

export interface BuyerProfile {
  name: string;
  position: string;
  buys: string[];
  cares: string[];
  start: string;
}

export const BUYER_PROFILES: BuyerProfile[] = [
  {
    name: "Spinning mills",
    position: "Most upstream. Buys raw recycled fibre and spins it themselves.",
    buys: ["Recycled cotton fibre", "Recycled polyester staple", "Pre-blended fibre for the card line"],
    cares: ["Staple length and contamination", "Consistency lot to lot", "Container-scale supply"],
    start: "A spin system, a count range and a fibre spec.",
  },
  {
    name: "Fabric manufacturers",
    position: "Weave or knit yarn into fabric. Usually buys yarn, rarely fibre.",
    buys: ["Recycled and blended yarn", "Sample cones for new constructions"],
    cares: ["Yarn count and CV", "Strength for warp use", "Colour and shade matching"],
    start: "Fabric construction and the yarn count it needs.",
  },
  {
    name: "Garment exporters",
    position: "Make finished clothing, normally to a brand's recycled-content requirement.",
    buys: ["Recycled fabric or yarn", "Certified material with transaction certificates"],
    cares: ["Brand compliance paperwork", "Delivery timing against shipping windows", "Traceable batches"],
    start: "The brand's requirement document.",
  },
  {
    name: "Home textile manufacturers",
    position: "Bedsheets, towels, curtains, upholstery. Same logic as garment exporters, different fibres.",
    buys: ["Recycled cotton and blended yarn", "Bulk lots for repeat programmes"],
    cares: ["Handle and durability", "Colourfastness", "Repeatability across seasons"],
    start: "Product category and the yarn or fibre range.",
  },
  {
    name: "Brands & buying houses",
    position: "The demand side. A buying house is often the day-to-day contact even when a brand sets the requirement.",
    buys: ["Recycled-content programmes for collections", "Verified supplier options"],
    cares: ["Verified documentation", "Supplier comparison on equal terms", "Audit-ready records"],
    start: "The brief for a collection or programme.",
  },
  {
    name: "Textile traders & importers",
    position: "Move volume and logistics. Can absorb larger, less bespoke lots.",
    buys: ["Container-scale fibre and yarn", "Surplus and mixed lots"],
    cares: ["Price, volume and delivery", "Clean paperwork for onward sale", "Flexible lot sizes"],
    start: "Volume, destination and target price band.",
  },
];

export const WHO_PROBLEMS = [
  {
    title: "For the buyer closest to the brand",
    body: "The brand says recycled content, and it passes that requirement down the chain. WhizzoWow supplies the evidence a buying house or exporter needs to answer it, without re-doing the supplier search each season.",
  },
  {
    title: "For the buyer closest to the fibre",
    body: "A mill needs consistent input more than anything. Specification-based sourcing and sampled lots reduce the variation that causes yarn faults and machine stoppages.",
  },
  {
    title: "For the buyer in the middle",
    body: "Fabric makers and garment makers sit between a brand's requirement and a mill's output. We help them find the right yarn or fabric and the documents that go with it.",
  },
];


/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const CONTACT_CHANNELS = [
  { title: "WhatsApp", body: "Fastest reply. Best for buying houses and traders already mid-programme who can share a spec in a few lines." },
  { title: "Contact form", body: "Best when you want to attach detail. We reply within two business days." },
];

export const CONTACT_INCLUDE = [
  {
    title: "Material",
    items: ["Fibre or yarn type", "Composition and blend ratio", "Pre- or post-consumer preference"],
  },
  {
    title: "Specification",
    items: ["Staple, denier or count", "Colour and shade tolerance", "Spin system or end process"],
  },
  {
    title: "Commercial",
    items: ["Quantity per lot", "Total programme size", "Delivery window and destination"],
  },
  {
    title: "Documentation",
    items: ["GRS / RCS", "OEKO-TEX", "Brand compliance forms"],
  },
];

export const CONTACT_NEXT = [
  { title: "We confirm the brief", body: "A named contact checks the specification and asks about anything unclear." },
  { title: "We search supply", body: "The brief is run against verified suppliers on spec and certification scope." },
  { title: "You receive options", body: "A comparison on the same parameters, with samples and documentation to follow." },
];


/* ------------------------------------------------------------------ */
/* How It Works                                                        */
/* ------------------------------------------------------------------ */

export const HOW_INTRO = [
  "Textile sourcing usually breaks down in the same places: the supplier search is scattered across contacts and platforms, every supplier describes material in a different way, and the documents arrive after the decision is made.",
  "WhizzoWow runs the same five steps on every enquiry. The point is not speed for its own sake. It is that each step closes a specific risk before the next one begins, so by the time you evaluate a sample, the specification and certification have already been checked.",
];

export interface HowStepDetail {
  step: string;
  title: string;
  summary: string;
  you: string[];
  we: string[];
  result: string[];
}

export const HOW_STEP_DETAIL: HowStepDetail[] = [
  {
    step: "01",
    title: "Share Requirement",
    summary:
      "You describe what you need to run. A full specification is ideal, but a reference sample, a previous purchase order or a short description of the end product is enough to begin.",
    you: [
      "Fibre or yarn type, composition and blend",
      "Key parameters: staple, denier, count, colour",
      "Quantity, delivery window and destination",
      "Certification and documentation required",
    ],
    we: [
      "Read the brief against what the market can actually supply",
      "Ask about anything ambiguous or missing",
      "Flag requirements that conflict or are unrealistic",
    ],
    result: ["A confirmed written specification", "A named contact for the enquiry"],
  },
  {
    step: "02",
    title: "We Source",
    summary:
      "The confirmed specification is run across a verified supplier network. We search on parameters and certification scope, not on supplier names, so the right lot is found even if it is not from a supplier you already know.",
    you: ["Nothing. This step is ours."],
    we: [
      "Search suppliers on specification and certification scope",
      "Request availability, lot size and indicative terms",
      "Remove suppliers outside the required scope early",
    ],
    result: ["A shortlist of suppliers able to meet the brief"],
  },
  {
    step: "03",
    title: "We Match & Verify",
    summary:
      "Before anything reaches you, each shortlisted option is checked against your specification and your certification requirement. This is the step that stops a documentation gap or a spec mismatch from becoming your problem.",
    you: ["Answer any clarifying questions on tolerances"],
    we: [
      "Check supplier scope certificates and declarations",
      "Compare lots on the same parameters, side by side",
      "Confirm test data supports the stated specification",
    ],
    result: ["A comparison of verified options", "Documents ready to accompany the samples"],
  },
  {
    step: "04",
    title: "You Evaluate",
    summary:
      "Samples and documentation reach you together. You test on your own line against your own criteria, and tell us what to adjust. This is the point at which the material is approved or the brief is refined.",
    you: [
      "Test the sample on your own process",
      "Review the accompanying documentation",
      "Approve, or tell us what to adjust",
    ],
    we: [
      "Ship samples with lot identification and test reports",
      "Gather your feedback and go back to supply if needed",
      "Keep the specification and the sample in step",
    ],
    result: ["An approved specification and sample", "Clear feedback if anything must change"],
  },
  {
    step: "05",
    title: "Move Toward Order",
    summary:
      "With the sample approved, commercial terms, lot planning and shipment documentation are set up. The goal is an order that matches what you evaluated, with the paperwork ready when the goods ship.",
    you: ["Confirm quantity, schedule and commercial terms"],
    we: [
      "Agree terms and plan lots against your schedule",
      "Coordinate packing and shipment",
      "Issue transaction certificates on shipment",
    ],
    result: ["A confirmed order", "Transaction certificate and final test report with shipment"],
  },
];

export const HOW_ROLES = {
  columns: ["Stage", "You provide", "WhizzoWow provides", "You receive"],
  rows: [
    ["Requirement", "Specification, quantity, certification need", "Brief review and clarification", "Confirmed specification"],
    ["Sourcing", "—", "Supplier search and availability", "Shortlist"],
    ["Match & Verify", "Tolerance answers", "Certification checks and comparison", "Verified options"],
    ["Evaluation", "Testing and feedback", "Samples, lot ID, test reports", "Approved sample"],
    ["Order", "Terms and schedule", "Lot planning and shipment documents", "Goods and transaction certificate"],
  ],
};

export const HOW_COMPARE = {
  columns: ["", "Typical supplier search", "With WhizzoWow"],
  rows: [
    ["Finding suppliers", "Contacts, platforms and referrals, searched separately", "One brief, run across a verified network"],
    ["Comparing options", "Each supplier describes material their own way", "Options compared on the same parameters"],
    ["Certification", "Requested after a price is agreed", "Checked before samples are released"],
    ["Samples", "Arrive without consistent documentation", "Arrive with lot ID and test reports"],
    ["Moving to order", "A separate negotiation, often restarting the search", "Built into the process from the first brief"],
  ],
};

export const HOW_PREPARE = [
  {
    title: "If you have a full specification",
    items: ["Send the spec sheet as it is", "State tolerances you will accept", "List any compliance forms required"],
  },
  {
    title: "If you have a reference only",
    items: ["Send a sample or photograph", "Describe the end product", "Tell us the process it will run on"],
  },
  {
    title: "If you are mid-programme",
    items: ["Share the current supplier and spec", "Say what is not working", "State your volume and timeline"],
  },
];

