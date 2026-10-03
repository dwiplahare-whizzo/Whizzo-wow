import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/primitives";

/** Full-bleed background video with a scrim, carrying a single eyebrow/
 *  title/intro block kept legible (light text, dark gradient) over it. */
export function VideoTextSection({
  eyebrow,
  title,
  intro,
  video,
  align = "left",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  video: string;
  align?: "left" | "right";
  /** Extra content rendered inside the same video background, below the text. */
  children?: ReactNode;
}) {
  return (
    <section className="wz-videosection">
      <div className="wz-videosection__media" aria-hidden="true">
        <video src={video} autoPlay muted loop playsInline />
      </div>
      <div className="wz-videosection__scrim" aria-hidden="true" />
      <Container>
        <Reveal>
          <div className={`wz-videosection__content${align === "right" ? " wz-videosection__content--right" : ""}`}>
            {eyebrow ? <span className="wz-eyebrow">{eyebrow}</span> : null}
            <h2>{title}</h2>
            {intro ? <p>{intro}</p> : null}
          </div>
        </Reveal>
        {children ? <div className="wz-videosection__extra">{children}</div> : null}
      </Container>
    </section>
  );
}
