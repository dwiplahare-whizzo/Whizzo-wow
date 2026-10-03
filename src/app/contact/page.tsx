import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import {
  PageHero,
  Section,
  SectionHead,
  FeatureGrid,
  ListColumns,
  ProcessDiagram,
  Button,
} from "@/components/primitives";
import { ContactForm } from "@/components/ContactForm";
import {
  CONTACT_CHANNELS,
  CONTACT_INCLUDE,
  CONTACT_NEXT,
} from "@/lib/content/wow-pages";

export const metadata = { title: "Contact — WhizzoWow" };

export default function Contact() {
  return (
    <BrandShell brand="wow">
      <PageHero
        eyebrow="Contact"
        title="Reach the sourcing desk"
        intro="Message us on WhatsApp for the fastest reply, or send a note below."
      />

      <Section>
        <Reveal>
          <div className="wz-split">
            <div>
              <SectionHead
                title="Send us your requirement"
                intro="Share your requirement in a few lines or attach a full specification. The more precise the brief, the faster we can match supply."
              />
              <FeatureGrid features={CONTACT_CHANNELS} />
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <Button href="https://wa.me/0000000000">Contact on WhatsApp</Button>
              </div>
            </div>
            <div>
              <ContactForm context="wow" />
            </div>
          </div>
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead
            eyebrow="Include in your brief"
            title="What helps us respond fast"
            intro="You do not need all of it. Start with what you know, and we will help fill in the rest."
          />
          <ListColumns columns={CONTACT_INCLUDE} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="What happens next" title="From message to options" />
          <ProcessDiagram steps={CONTACT_NEXT} />
        </Reveal>
      </Section>

    </BrandShell>
  );
}
