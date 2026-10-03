"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/** Lightweight scroll-triggered reveal — motion as storytelling, kept cheap. */
export function Reveal({
  children,
  as: Tag = "div",
  delay,
  className = "",
  style: styleProp,
}: {
  children: ReactNode;
  as?: "div" | "section";
  /** Optional stagger delay in ms, applied as a transition-delay. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    delay || styleProp ? { ...styleProp, ...(delay ? { "--wz-reveal-delay": `${delay}ms` } : {}) } : undefined;

  return (
    <Tag ref={ref as never} className={`wz-reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
