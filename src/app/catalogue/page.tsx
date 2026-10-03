import Link from "next/link";
import { SimplePage } from "@/components/SimplePage";

export const metadata = { title: "Catalogue — WhizzoWow" };

export default function Catalogue() {
  return (
    <SimplePage
      brand="wow"
      eyebrow="Catalogue"
      title="Download the WhizzoWow sourcing catalogue"
      intro="Product lines, typical sourcing parameters, and certification coverage — in one PDF."
      cta={{
        title: "Prefer to talk it through?",
        ctas: [{ label: "Contact Us", href: "/contact" }],
      }}
    >
      <p>
        The catalogue PDF is being finalised for this release. In the meantime, the{" "}
        <Link href="/what-we-source">What We Source</Link> pages carry the current sourcing
        parameters for each product line, and reaching out gets you a tailored response within
        two business days.
      </p>
    </SimplePage>
  );
}
