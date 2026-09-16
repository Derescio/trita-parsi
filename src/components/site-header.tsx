"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/media", label: "Media" },
  { href: "/writing", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

interface SiteHeaderProps {
  overlay?: boolean;
}

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [solid, setSolid] = useState(!overlay);

  useEffect(() => {
    if (!overlay) {
      setSolid(true);
      return;
    }

    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  return (
    <header
      className={
        overlay
          ? "fixed top-0 right-0 left-0 z-50"
          : "sticky top-0 z-50"
      }
    >
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          solid
            ? "bg-navy/96 shadow-[0_1px_0_rgba(166,135,61,0.35)] opacity-100 backdrop-blur-md"
            : "opacity-0"
        }`}
      />
      <div className="relative mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-8">
        <Link href="/" className="flex items-center gap-3.5">
          <span className="block h-[30px] w-[3px] bg-burgundy" />
          <span className="font-display text-[23px] font-semibold tracking-[0.14em] text-paper">
            TRITA PARSI
          </span>
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-1.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2.5 text-[12.5px] font-semibold tracking-[0.13em] text-paper uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#newsletter"
            className="ml-3 bg-burgundy px-[22px] py-[13px] text-[12.5px] font-bold tracking-[0.13em] text-paper uppercase hover:bg-burgundy-dark"
          >
            Join Newsletter
          </Link>
        </nav>
      </div>
    </header>
  );
}
