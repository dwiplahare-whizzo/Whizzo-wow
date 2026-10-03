import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import {
  PageHero,
  Section,
  SectionHead,
  Prose,
  MaterialCardGrid,
  DataTable,
  ListColumns,
  ProcessDiagram,
  CtaBand,
} from "@/components/primitives";
import { WOW_WHAT_WE_SOURCE } from "@/lib/content/wow-home";
import {
  SOURCE_INTRO,
  SOURCE_COMPARISON,
  SOURCE_BRIEF,
  SOURCE_PROCESS,
} from "@/lib/content/wow-pages";

export const metadata = { title: "What We Source — WhizzoWow" };

export default function WhatWeSource() {
  return (
    <BrandShell brand="wow">
      <PageHero
        eyebrow="What We Source"
        title="Recycled fibre and yarn, described the way a spec sheet describes it"
        intro="Four product lines, each with real sourcing parameters — staple, denier, count, certification — not a marketplace listing."
      />

      <Section>
        <Reveal>
          <Prose>
            {SOURCE_INTRO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead eyebrow="Product lines" title="Choose where you enter the chain" />
          <MaterialCardGrid cards={WOW_WHAT_WE_SOURCE.cards} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="Side by side"
            title="How the four lines compare"
            intro="Each line is defined by different parameters. This is what we ask you to specify."
          />
          <DataTable columns={SOURCE_COMPARISON.columns} rows={SOURCE_COMPARISON.rows} />
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead title={SOURCE_BRIEF.title} intro={SOURCE_BRIEF.intro} />
          <ListColumns columns={SOURCE_BRIEF.columns} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="From brief to order"
            title="What happens after you send a brief"
          />
          <ProcessDiagram steps={SOURCE_PROCESS} />
        </Reveal>
      </Section>


      <CtaBand
        title="Have a spec ready?"
        ctas={[
          { label: "Contact Us", href: "/contact" },
          { label: "Download Catalogue", href: "/catalogue", variant: "ghost" },
        ]}
        image="/images/wow-cta-bg.webp"
      />
    </BrandShell>
  );
}
