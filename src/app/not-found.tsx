import Link from "next/link";
import { Container } from "@/components/primitives";

export default function NotFound() {
  return (
    <div data-brand="wow">
      <Container>
        <section className="wz-section" style={{ minHeight: "60vh" }}>
          <span className="wz-eyebrow">404</span>
          <h1 style={{ fontSize: "var(--step-4)", marginTop: "1rem" }}>Page not found</h1>
          <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: "48ch" }}>
            The page you&apos;re looking for has moved or never existed.
          </p>
          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/" className="wz-btn wz-btn--primary">WhizzoWow</Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
