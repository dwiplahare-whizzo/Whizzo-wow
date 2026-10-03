"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/lib/nav";

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="wz-mobilemenu">
      <button
        className="wz-mobilemenu__toggle"
        aria-expanded={open}
        aria-controls="wz-mobile-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id="wz-mobile-nav" className="wz-mobilemenu__panel" hidden={!open} aria-label="Primary">
        {items.map((item) => (
          <div key={item.label}>
            <Link href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
            {item.children?.map((c) => (
              <Link key={c.href} href={c.href} className="wz-mobilemenu__sub" onClick={() => setOpen(false)}>
                {c.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </div>
  );
}
