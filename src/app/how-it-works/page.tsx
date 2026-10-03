import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import { JourneyScroll } from "@/components/JourneyScroll";
import {
  PageHero,
  Section,
  SectionHead,
  Prose,
  DataTable,
  ListColumns,
  CtaBand,
} from "@/components/primitives";
import { SOURCING_STEPS } from "@/lib/content/wow";
import {
  HOW_INTRO,
  HOW_STEP_DETAIL,
  HOW_ROLES,
  HOW_COMPARE,
  HOW_PREPARE,
} from "@/lib/content/wow-pages";

export const metadata = { title: "How It Works — WhizzoWow" };

export default function HowItWorks() {
  return (
    <BrandShell brand="wow">
      <PageHero
        eyebrow="How WhizzoWow Works"
        title="Five steps from requirement to order"
        intro="Supplier search is fragmented and specs are inconsistent. This is the process that fixes that."
      />

      <Section>
        <Reveal>
          <Prose>
            {HOW_INTRO.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Prose>
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <JourneyScroll image="/images/wow-journey.webp" steps={SOURCING_STEPS} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="Step by step"
            title="What happens at each stage"
            intro="For every step: what we need from you, what we do, and what you get back."
          />
        </Reveal>
        <div style={{ display: "grid", gap: "2.5rem" }}>
          {HOW_STEP_DETAIL.map((s) => (
            <Reveal key={s.step}>
              <article className="wz-profile">
                <header>
                  <span className="wz-eyebrow">Step {s.step}</span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                </header>
                <div className="wz-profile__cols">
                  <div>
                    <h4>You provide</h4>
                    <ul>{s.you.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                  <div>
                    <h4>We do</h4>
                    <ul>{s.we.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                  <div>
                    <h4>You receive</h4>
                    <ul>{s.result.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead
            eyebrow="Who does what"
            title="Responsibilities across the process"
          />
          <DataTable columns={HOW_ROLES.columns} rows={HOW_ROLES.rows} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="The difference"
            title="Why this beats a generic supplier search"
            intro="Differentiation against a marketplace listing or a round of cold enquiries."
          />
          <DataTable columns={HOW_COMPARE.columns} rows={HOW_COMPARE.rows} />
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead
            eyebrow="Getting started"
            title="What to send, depending on where you are"
          />
          <ListColumns columns={HOW_PREPARE} />
        </Reveal>
      </Section>


      <CtaBand
        title="Start with a requirement"
        ctas={[{ label: "Contact Us", href: "/contact" }]}
        image="/images/wow-cta-bg.webp"
      />
    </BrandShell>
  );
}
