import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import { SectorSelector } from "@/components/SectorSelector";
import { ProblemList } from "@/components/ProblemList";
import { JourneyScroll } from "@/components/JourneyScroll";
import { VideoTextSection } from "@/components/VideoTextSection";
import {
  Hero,
  Section,
  SectionHead,
  MaterialCardGrid,
  FeatureGrid,
  CtaBand,
} from "@/components/primitives";
import {
  WOW_HERO,
  WOW_PROBLEM,
  WOW_WHAT_WE_SOURCE,
  WOW_HOW_IT_WORKS,
  WOW_WHY_WHIZZOWOW,
  WOW_WHO_WE_SERVE,
  WOW_APPLICATION_VIDEO,
  WOW_APPLICATION_SELECTOR,
  WOW_CONTACT_CTA,
} from "@/lib/content/wow-home";

export const metadata = {
  title: "WhizzoWow — Recycled Fibres & Yarns for Scalable Textile Production",
};

export default function WowHome() {
  return (
    <BrandShell brand="wow">
      <Hero {...WOW_HERO} />

      <Section>
        <ProblemList eyebrow={WOW_PROBLEM.eyebrow} items={WOW_PROBLEM.items} />
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead eyebrow={WOW_WHAT_WE_SOURCE.eyebrow} title={WOW_WHAT_WE_SOURCE.title} />
          <MaterialCardGrid cards={WOW_WHAT_WE_SOURCE.cards} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead
            eyebrow={WOW_HOW_IT_WORKS.eyebrow}
            title={WOW_HOW_IT_WORKS.title}
            intro={WOW_HOW_IT_WORKS.intro}
          />
          <JourneyScroll image={WOW_HOW_IT_WORKS.image} steps={WOW_HOW_IT_WORKS.steps} />
        </Reveal>
        <Reveal>
          <p className="wz-tagline wz-tagline--center">{WOW_HOW_IT_WORKS.tagline}</p>
        </Reveal>
      </Section>

      <VideoTextSection {...WOW_WHY_WHIZZOWOW} />

      <Section>
        <Reveal>
          <SectionHead
            eyebrow={WOW_WHO_WE_SERVE.eyebrow}
            title={WOW_WHO_WE_SERVE.title}
            intro={WOW_WHO_WE_SERVE.intro}
          />
          <FeatureGrid features={WOW_WHO_WE_SERVE.features} />
        </Reveal>
        <Reveal>
          <p className="wz-tagline">{WOW_WHO_WE_SERVE.tagline}</p>
        </Reveal>
      </Section>

      <VideoTextSection {...WOW_APPLICATION_VIDEO}>
        <Reveal>
          <SectorSelector items={WOW_APPLICATION_SELECTOR.items} />
        </Reveal>
        <Reveal>
          <p className="wz-tagline">{WOW_APPLICATION_SELECTOR.tagline}</p>
        </Reveal>
      </VideoTextSection>

      <Reveal>
        <CtaBand {...WOW_CONTACT_CTA} />
      </Reveal>
    </BrandShell>
  );
}
