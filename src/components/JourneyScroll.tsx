"use client";

import { useEffect, useRef, useState } from "react";

export interface JourneyStep {
  title: string;
  body: string;
}

/**
 * Pinned scrollytelling, centred: the illustration sticks in the middle
 * column while the four steps scroll past in the side columns,
 * alternating right / left / right / left. Whichever step is centred in
 * the viewport spotlights at full strength (via IntersectionObserver
 * with a shrunk root); the rest sit dimmed.
 */
export function JourneyScroll({ image, steps }: { image: string; steps: JourneyStep[] }) {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (i !== -1) setActiveIndex(i);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [steps.length]);

  const renderStep = (step: JourneyStep, i: number) => (
    <div
      key={step.title}
      ref={(el) => {
        stepRefs.current[i] = el;
      }}
      className={`wz-journeypin__step${i === activeIndex ? " is-active" : ""}`}
      style={{ order: i }}
    >
      <span className="wz-journeypin__num">{String(i + 1).padStart(2, "0")}</span>
      <h3>{step.title}</h3>
      <p>{step.body}</p>
    </div>
  );

  return (
    <div className="wz-journeypin wz-journeypin--split">
      <div className="wz-journeypin__col wz-journeypin__col--left">
        {steps.map((step, i) => (i % 2 === 1 ? renderStep(step, i) : null))}
      </div>

      <div className="wz-journeypin__media">
        <div className="wz-journeypin__media-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="The WhizzoWow recycling journey, from recovered textile waste to finished yarn" />
        </div>
      </div>

      <div className="wz-journeypin__col wz-journeypin__col--right">
        {steps.map((step, i) => (i % 2 === 0 ? renderStep(step, i) : null))}
      </div>
    </div>
  );
}
