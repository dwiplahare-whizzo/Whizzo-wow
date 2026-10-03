import { Button } from "./button";
import { Container } from "./layout";

/* ---------- CTA band ---------- */
export function CtaBand({
  title,
  ctas,
  image,
}: {
  title: string;
  ctas: { label: string; href: string; variant?: "primary" | "ghost" }[];
  /** Optional fixed-attachment background photo — content rides over it,
   *  transparent, while the image itself stays pinned as the page scrolls. */
  image?: string;
}) {
  return (
    <section
      className={`wz-section${image ? " wz-ctaband-section--media" : " wz-stats"}`}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <Container>
        <div className="wz-ctaband">
          <h2>{title}</h2>
          <div className="wz-hero__cta">
            {ctas.map((c) => (
              <Button key={c.href} href={c.href} variant={c.variant ?? "primary"}>
                {c.label}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Stat / impact band ---------- */
export function StatBand({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="wz-section wz-stats">
      <Container>
        <div className="wz-stats__grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="wz-stat__value">{s.value}</div>
              <div className="wz-stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
