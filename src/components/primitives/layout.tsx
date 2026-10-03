import type { ReactNode } from "react";

/* ---------- Layout ---------- */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`wz-container ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  className = "",
  tone,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "surface";
}) {
  return (
    <section id={id} className={`wz-section ${tone === "surface" ? "wz-stats" : ""} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string | string[];
}) {
  const paras = intro ? (Array.isArray(intro) ? intro : [intro]) : [];
  return (
    <div className="wz-sectionhead">
      {eyebrow ? <span className="wz-eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {paras.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

/* ---------- Announcement bar ---------- */
export function AnnounceBar({ children }: { children: ReactNode }) {
  return (
    <div className="wz-announce">
      <Container>{children}</Container>
    </div>
  );
}

/* ---------- Compact page hero (interior pages) ---------- */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="wz-pagehero">
      <Container>
        {eyebrow ? <span className="wz-eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
        {intro ? <p className="wz-pagehero__intro">{intro}</p> : null}
      </Container>
    </section>
  );
}

/* ---------- Prose ---------- */
export function Prose({ children }: { children: ReactNode }) {
  return <div className="wz-prose">{children}</div>;
}
