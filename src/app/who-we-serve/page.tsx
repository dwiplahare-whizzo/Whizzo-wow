import { BrandShell } from "@/components/BrandShell";
import { Reveal } from "@/components/Reveal";
import {
  PageHero,
  Section,
  SectionHead,
  Prose,
  FeatureGrid,
  ProcessDiagram,
  CtaBand,
} from "@/components/primitives";
import { BUYER_PROFILES, WHO_PROBLEMS } from "@/lib/content/wow-pages";

export const metadata = { title: "Who We Serve — WhizzoWow" };

const CHAIN = [
  { title: "Mill", body: "Spins recycled fibre into yarn." },
  { title: "Fabric maker", body: "Weaves or knits yarn into fabric." },
  { title: "Garment / home-textile maker", body: "Cuts and sews finished product." },
  { title: "Brand / buying house", body: "Sets the requirement and sells to the end customer." },
];

export default function WhoWeServe() {
  return (
    <BrandShell brand="wow">
      <PageHero
        eyebrow="Who We Serve"
        title="The sourcing layer underneath the whole value chain"
        intro="Mill → fabric maker → garment / home-textile maker → brand / buying house, plus one horizontal player able to transact at any point."
      />

      <Section>
        <Reveal>
          <SectionHead
            eyebrow="The value chain"
            title="Where WhizzoWow sits"
            intro="Not a vendor to one buyer type. The sourcing layer underneath all of them, with traders and importers able to transact at any point."
          />
          <ProcessDiagram steps={CHAIN} />
        </Reveal>
      </Section>

      <Section tone="surface">
        <Reveal>
          <SectionHead
            eyebrow="Buyer profiles"
            title="What each buyer needs from a sourcing partner"
          />
        </Reveal>
        <div style={{ display: "grid", gap: "2.5rem" }}>
          {BUYER_PROFILES.map((b) => (
            <Reveal key={b.name}>
              <article className="wz-profile">
                <header>
                  <h3>{b.name}</h3>
                  <p>{b.position}</p>
                </header>
                <div className="wz-profile__cols">
                  <div>
                    <h4>Typically buys</h4>
                    <ul>{b.buys.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                  <div>
                    <h4>Cares about</h4>
                    <ul>{b.cares.map((i) => <li key={i}>{i}</li>)}</ul>
                  </div>
                  <div>
                    <h4>Best place to start</h4>
                    <p>{b.start}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead eyebrow="Why it works" title="One process, three different problems solved" />
          <FeatureGrid features={WHO_PROBLEMS} />
        </Reveal>
      </Section>


      <CtaBand
        title="Tell us where you sit in the chain"
        ctas={[{ label: "Contact Us", href: "/contact" }]}
        image="/images/wow-cta-bg.webp"
      />
    </BrandShell>
  );
}
