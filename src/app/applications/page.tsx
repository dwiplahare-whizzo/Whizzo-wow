import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section, CtaBand } from "@/components/primitives";
import { SectorSelector } from "@/components/SectorSelector";
import { APPLICATIONS } from "@/lib/content/wow";

export const metadata = { title: "Applications — WhizzoWow" };

/** Reuses the same per-sector clips shot for the homepage's Application
 *  selector — keyed by label since this page's list is a slightly
 *  different subset/copy of that one. */
const VIDEO_BY_LABEL: Record<string, string> = {
  Spinning: "/video/sector-01-spinning.mp4",
  Weaving: "/video/sector-02-weaving.mp4",
  Knitting: "/video/sector-03-knitting.mp4",
  Garments: "/video/sector-04-garments.mp4",
  "Home Textiles": "/video/sector-05-home-textiles.mp4",
  "Export Programmes": "/video/sector-07-export-programmes.mp4",
};

export default function Applications() {
  const items = APPLICATIONS.map((a) => ({ ...a, video: VIDEO_BY_LABEL[a.label] }));

  return (
    <BrandShell brand="wow">
      <PageHero
        eyebrow="Applications"
        title="Where WhizzoWow supply ends up"
        intro="One page, one selector — serving several buyer types from a single view."
      />
      <Section>
        <Reveal>
          <SectorSelector items={items} />
        </Reveal>
        <Reveal>
          <p className="wz-tagline">Spinning · Weaving · Knitting · Garments · Home Textiles · Export Programmes</p>
        </Reveal>
      </Section>
      <CtaBand
        title="Match supply to your application"
        ctas={[{ label: "Contact Us", href: "/contact" }]}
        image="/images/wow-cta-bg.webp"
      />
    </BrandShell>
  );
}
