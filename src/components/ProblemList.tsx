import { Reveal } from "@/components/Reveal";

export interface ProblemItem {
  title: string;
  hook: string;
  body: string;
}

/**
 * Numbered, text-light list of problem statements — each row reveals on
 * scroll with a short stagger. A hand-drawn rule under the eyebrow ties it
 * to the rest of the editorial system without repeating a card grid.
 */
export function ProblemList({
  eyebrow,
  items,
}: {
  eyebrow: string;
  items: ProblemItem[];
}) {
  return (
    <div className="wz-problem">
      <Reveal className="wz-problem__eyebrow-row">
        <span className="wz-eyebrow">{eyebrow}</span>
        <svg className="wz-problem__rule" viewBox="0 0 240 2" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="1" x2="240" y2="1" />
        </svg>
      </Reveal>

      <ol className="wz-problemlist">
        {items.map((item, i) => (
          <Reveal key={item.title} as="div" delay={Math.min(i, 5) * 70} className="wz-problemlist__row">
            <li>
              <span className="wz-problemlist__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <span className="wz-problemlist__title">{item.title}</span>
                <p className="wz-problemlist__hook">{item.hook}</p>
                <p className="wz-problemlist__body">{item.body}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
