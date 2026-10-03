import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import {
  PageHero,
  Section,
  SectionHead,
  Prose,
  DataTable,
  ListColumns,
  ProcessDiagram,
  CtaBand,
} from "@/components/primitives";
import {
  TRACE_INTRO,
  TRACE_STANDARDS,
  TRACE_DOSSIER,
  TRACE_FLOW,
} from "@/lib/content/wow-pages";

export const metadata = { title: "Traceability & Documentation — WhizzoWow" };

export default function Traceability() {
  return (
    <BrandShell brand="wow">
      <PageHero
        eyebrow="Traceability & Documentation"
        title="The paperwork is the product"
        intro="For this audience, documentation is the highest-leverage part of the offer. Here's what comes with a WhizzoWow order."
      />

      <Section>
        <Reveal>
          <Prose>
            {TRACE_INTRO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead
            eyebrow="The documents"
            title="Standards and records, and what each one proves"
          />
          <DataTable columns={TRACE_STANDARDS.columns} rows={TRACE_STANDARDS.rows} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="Your document pack"
            title="What arrives at each stage"
            intro="Documentation is released in step with the material, so evidence and goods always point at the same lot."
          />
          <ListColumns columns={TRACE_DOSSIER} />
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead
            eyebrow="The paper trail"
            title="From specification to transaction certificate"
            intro="Certification and specification are checked before samples reach you, so you do not inherit a documentation gap."
          />
          <ProcessDiagram steps={TRACE_FLOW} />
        </Reveal>
      </Section>


      <CtaBand
        title="Ask about documentation for your programme"
        ctas={[{ label: "Contact Us", href: "/contact" }]}
        image="/images/wow-cta-bg.webp"
      />
    </BrandShell>
  );
}
