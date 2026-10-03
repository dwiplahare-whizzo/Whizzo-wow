import { notFound } from "next/navigation";
import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import {
  PageHero,
  Section,
  SectionHead,
  Prose,
  SpecList,
  DataTable,
  ListColumns,
  MaterialCardGrid,
  CtaBand,
} from "@/components/primitives";
import { SOURCE_PRODUCTS, SOURCE_PRODUCT_IMAGES } from "@/lib/content/wow";
import { PRODUCT_DETAIL } from "@/lib/content/wow-pages";
import { WOW_WHAT_WE_SOURCE } from "@/lib/content/wow-home";

export function generateStaticParams() {
  return SOURCE_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = SOURCE_PRODUCTS.find((x) => x.slug === slug);
  return { title: p ? `${p.name} — WhizzoWow` : "WhizzoWow" };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = SOURCE_PRODUCTS.find((x) => x.slug === slug);
  const d = PRODUCT_DETAIL[slug];
  if (!p || !d) notFound();

  const others = WOW_WHAT_WE_SOURCE.cards.filter((c) => c.href !== `/what-we-source/${slug}`);

  return (
    <BrandShell brand="wow">
      <PageHero eyebrow="What We Source" title={p.name} intro={p.promise} />

      <Section>
        <Reveal>
          <div className="wz-split">
            <div className="wz-split__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={SOURCE_PRODUCT_IMAGES[p.slug]} alt={p.name} />
            </div>
            <Prose>
              <p>{p.summary}</p>
              {d.overview.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </Prose>
          </div>
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead eyebrow="Sourcing parameters" title="The specification at a glance" />
          <SpecList rows={p.specs} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="What you define"
            title="The parameters that decide the lot"
            intro="These are the points we ask you to fix in the brief, and what each one controls."
          />
          <SpecList rows={d.parameters} />
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead eyebrow="Variants" title="Common grades and types" />
          <DataTable columns={d.grades.columns} rows={d.grades.rows} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <ListColumns
            columns={[
              d.endUses,
              { title: "Points to consider", items: d.considerations },
              { title: "Documents provided", items: d.documents },
            ]}
          />
        </Reveal>
      </Section>


      <Section>
        <Reveal>
          <SectionHead title="Other product lines" />
          <MaterialCardGrid cards={others} />
        </Reveal>
      </Section>

      <CtaBand
        title={`Enquire about ${p.name.toLowerCase()}`}
        ctas={[
          { label: "Contact Us", href: "/contact" },
          { label: "Download Catalogue", href: "/catalogue", variant: "ghost" },
        ]}
        image="/images/wow-cta-bg.webp"
      />
    </BrandShell>
  );
}
