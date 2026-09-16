"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [solid, setSolid] = useState(!overlay);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const showBar = solid || open;

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
          showBar
            ? "bg-navy/96 shadow-[0_1px_0_rgba(166,135,61,0.35)] opacity-100 backdrop-blur-md"
            : "opacity-0"
        }`}
      />
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 lg:h-[76px] lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="block h-[26px] w-[3px] shrink-0 bg-burgundy lg:h-[30px]" />
          <span className="font-display truncate text-[20px] font-semibold tracking-[0.12em] text-paper lg:text-[23px] lg:tracking-[0.14em]">
            TRITA PARSI
          </span>
        </Link>
        <nav className="hidden items-center justify-end gap-1.5 lg:flex">
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
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute top-0 left-0 h-0.5 w-full bg-paper transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute top-[6px] left-0 h-0.5 w-full bg-paper transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-paper transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto border-t border-gold/25 bg-navy lg:hidden"
      >
        <div className="px-5 pt-4 pb-10">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-paper/10 py-4 text-[13px] font-semibold tracking-[0.16em] text-paper uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#newsletter"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-burgundy px-6 py-4 text-center text-[12.5px] font-bold tracking-[0.13em] text-paper uppercase hover:bg-burgundy-dark"
          >
            Join Newsletter
          </Link>
        </div>
      </div>
    </header>
  );
}
