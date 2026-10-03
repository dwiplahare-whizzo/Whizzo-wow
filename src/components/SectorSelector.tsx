"use client";

import { useEffect, useRef, useState } from "react";

export interface SectorItem {
  label: string;
  body: string;
  /** Optional real photo; falls back to a numbered editorial placeholder. */
  image?: string;
  /** Optional looping video; takes priority over `image` when both are set. */
  video?: string;
}

/**
 * Minimal interactive sector picker: a list on the left with a moving
 * accent indicator that tracks the active row, and a panel on the right
 * that animates in fresh copy whenever the selection changes. Replaces a
 * plain accordion with something that responds to hover/click rather than
 * just expand/collapse.
 */
export function SectorSelector({ items }: { items: SectorItem[] }) {
  const [active, setActive] = useState(0);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const el = itemRefs.current[active];
      if (!list || !el) return;
      const listRect = list.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setIndicator({ top: elRect.top - listRect.top, height: elRect.height });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const current = items[active];

  return (
    <div className="wz-sectorselect">
      <div className="wz-sectorselect__list" ref={listRef} role="tablist" aria-label="Applications">
        <span
          className="wz-sectorselect__indicator"
          style={{ transform: `translateY(${indicator.top}px)`, height: indicator.height }}
          aria-hidden="true"
        />
        {items.map((item, i) => (
          <button
            key={item.label}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            aria-selected={i === active}
            className="wz-sectorselect__item"
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
          >
            <span className="wz-sectorselect__num">{String(i + 1).padStart(2, "0")}</span>
            <span className="wz-sectorselect__label">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="wz-sectorselect__panel" role="tabpanel">
        <div className="wz-sectorselect__panel-inner" key={active}>
          <div className="wz-sectorselect__media">
            {current.video ? (
              <video src={current.video} autoPlay muted loop playsInline />
            ) : current.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={current.image} alt="" />
            ) : (
              <span className="wz-sectorselect__num-big" aria-hidden="true">
                {String(active + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          <div className="wz-sectorselect__scrim" aria-hidden="true" />
          <div className="wz-sectorselect__text">
            <h3>{current.label}</h3>
            <p>{current.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
