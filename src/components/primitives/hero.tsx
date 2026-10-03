import { Button } from "./button";
import { Container } from "./layout";

/* ---------- Hero ---------- */
export function Hero({
  eyebrow,
  headline,
  sub,
  ctas,
  media,
}: {
  eyebrow?: string;
  headline: string;
  sub?: string;
  ctas: { label: string; href: string; variant?: "primary" | "ghost" }[];
  media?: { src: string; alt: string; video?: boolean };
}) {
  const heroClass = ["wz-hero", media ? "wz-hero--media" : "", media?.video ? "wz-hero--video" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={heroClass}>
      <div className="wz-hero__media" aria-hidden={!media}>
        {media?.video ? (
          <video src={media.src} autoPlay muted loop playsInline aria-label={media.alt} />
        ) : media ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={media.src} alt={media.alt} />
        ) : null}
      </div>
      <div className="wz-hero__scrim" />
      <Container className="wz-hero__inner">
        {eyebrow ? <span className="wz-eyebrow">{eyebrow}</span> : null}
        <h1>{headline}</h1>
        {sub ? <p className="wz-hero__sub">{sub}</p> : null}
        <div className="wz-hero__cta">
          {ctas.map((c) => (
            <Button key={c.href} href={c.href} variant={c.variant ?? "primary"}>
              {c.label}
            </Button>
          ))}
        </div>
      </Container>
    </header>
  );
}
