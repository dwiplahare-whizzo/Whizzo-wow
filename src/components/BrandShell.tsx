import Link from "next/link";
import type { ReactNode } from "react";
import { BRANDS, type BrandKey } from "@/lib/brands";
import { NAV } from "@/lib/nav";
import { Container } from "./primitives";
import { MobileMenu } from "./MobileMenu";

function Header({ brand }: { brand: BrandKey }) {
  const b = BRANDS[brand];
  const items = NAV;
  return (
    <header className="wz-header">
      <Container>
        <div className="wz-header__row">
          <Link href={b.path} className="wz-logo">
            WhizzoWow
          </Link>
          <nav className="wz-nav" aria-label="Primary">
            {items.map((item) =>
              item.children ? (
                <span key={item.label} className="wz-nav__group">
                  <Link href={item.href}>{item.label} ▾</Link>
                  <span className="wz-nav__panel">
                    {item.children.map((c) => (
                      <Link key={c.href} href={c.href}>
                        {c.label}
                      </Link>
                    ))}
                  </span>
                </span>
              ) : (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="wz-header__actions">
            <MobileMenu items={items} />
          </div>
        </div>
      </Container>
    </header>
  );
}

function Footer({ brand }: { brand: BrandKey }) {
  const b = BRANDS[brand];
  const items = NAV;
  return (
    <footer className="wz-footer">
      <Container>
        <div className="wz-footer__grid">
          {items.map((item) => (
            <div key={item.label}>
              <h4>{item.label}</h4>
              {(item.children ?? [{ label: "Open", href: item.href }]).map((c) => (
                <Link key={c.href} href={c.href}>
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="wz-footer__bottom">
          <span>
            Copyright © {new Date().getFullYear()} - Whizzo Textiles Pvt. Ltd. All Rights Reserved. · {b.domain}
          </span>
          <span style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
            <Link href="https://www.linkedin.com/company/whizzoorg/">LinkedIn</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}

export function BrandShell({
  brand,
  children,
}: {
  brand: BrandKey;
  children: ReactNode;
}) {
  return (
    <div data-brand={brand}>
      <a href="#main" className="wz-skip">Skip to content</a>
      <Header brand={brand} />
      <main id="main">{children}</main>
      <Footer brand={brand} />
    </div>
  );
}
