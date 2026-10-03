import Link from "next/link";
import type { ReactNode } from "react";

/* ---------- Button ---------- */
export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  return (
    <Link href={href} className={`wz-btn wz-btn--${variant}`}>
      {children}
    </Link>
  );
}
