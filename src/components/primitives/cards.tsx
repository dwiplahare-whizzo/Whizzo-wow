import Link from "next/link";

/* ---------- Definition list (spec sheets) ---------- */
export function SpecList({ rows }: { rows: { term: string; detail: string }[] }) {
  return (
    <dl className="wz-specs">
      {rows.map((r) => (
        <div key={r.term} className="wz-specs__row">
          <dt>{r.term}</dt>
          <dd>{r.detail}</dd>
        </div>
      ))}
    </dl>
  );
}

/* ---------- Feature list (bento-ish) ---------- */
export function FeatureGrid({ features }: { features: { title: string; body: string }[] }) {
  return (
    <div className="wz-features">
      {features.map((f) => (
        <div key={f.title} className="wz-feature">
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Material platform card ---------- */
export interface MaterialCardData {
  name: string;
  promise: string;
  href: string;
  image?: string;
  /** Optional "Best for: X · Y" line rendered beneath the promise. */
  bestFor?: string;
}

export function MaterialCardGrid({ cards }: { cards: MaterialCardData[] }) {
  return (
    <div className="wz-cards">
      {cards.map((c) => (
        <Link key={c.name} href={c.href} className="wz-card">
          <div className="wz-card__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {c.image ? <img src={c.image} alt="" /> : null}
          </div>
          <div className="wz-card__body">
            <span className="wz-card__name">{c.name}</span>
            <span className="wz-card__promise">{c.promise}</span>
            {c.bestFor ? <span className="wz-card__bestfor">Best for: {c.bestFor}</span> : null}
            <span className="wz-card__link">Explore →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/* ---------- Numbered process diagram ---------- */
export function ProcessDiagram({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="wz-process">
      {steps.map((s) => (
        <div key={s.title} className="wz-process__step">
          <h3>{s.title}</h3>
          {s.body ? <p>{s.body}</p> : null}
        </div>
      ))}
    </div>
  );
}

/* ---------- Leadership / portrait card ---------- */
export function LeadershipGrid({ people }: { people: { name: string; role: string; photo?: string }[] }) {
  return (
    <div className="wz-people">
      {people.map((p) => (
        <div key={p.name}>
          <div className="wz-person__photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {p.photo ? <img src={p.photo} alt={p.name} /> : null}
          </div>
          <div className="wz-person__name">{p.name}</div>
          <div className="wz-person__role">{p.role}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Project / industry grid tile ---------- */
export interface ProjectTileData {
  title: string;
  tag: string;
  href: string;
  image?: string;
}

export function ProjectGrid({ tiles }: { tiles: ProjectTileData[] }) {
  return (
    <div className="wz-projects">
      {tiles.map((t) => (
        <Link key={t.title} href={t.href} className="wz-project">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {t.image ? <img src={t.image} alt="" /> : null}
          <span className="wz-project__overlay">
            <span className="wz-project__tag">{t.tag}</span>
            <span className="wz-project__title">{t.title}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
