import type { ReactNode } from "react";
import { BrandShell } from "./BrandShell";
import type { BrandKey } from "@/lib/brands";
import { PageHero, Section, Prose, CtaBand } from "./primitives";
import { Reveal } from "./Reveal";

/** Shared scaffold for text-forward interior pages. */
export function SimplePage({
  brand,
  eyebrow,
  title,
  intro,
  children,
  cta,
}: {
  brand: BrandKey;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  cta?: { title: string; ctas: { label: string; href: string; variant?: "primary" | "ghost" }[] };
}) {
  return (
    <BrandShell brand={brand}>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} />
      {children ? (
        <Section>
          <Reveal>
            <Prose>{children}</Prose>
          </Reveal>
        </Section>
      ) : null}
      {cta ? <CtaBand title={cta.title} ctas={cta.ctas} /> : null}
    </BrandShell>
  );
}
