"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { Book, SiteSettings } from "@/.utils/types";

interface SiteFooterProps {
  settings: SiteSettings;
  books: Book[];
}

export function SiteFooter({ settings, books }: SiteFooterProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSent(true);
  }

  const press = settings?.pressEmail ?? "press@tritaparsi.com";
  const speaking = settings?.speakingEmail ?? "speaking@tritaparsi.com";

  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t-[3px] border-gold bg-navy px-5 pt-14 pb-9 lg:px-8 lg:pt-18"
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-8 border-b border-paper/14 pb-14">
          <div className="min-w-0 flex-1 sm:min-w-65">
            <div className="mb-5 flex items-center gap-3.5">
              <span className="block h-7 w-0.75 bg-burgundy" />
              <span className="font-display text-[21px] font-semibold tracking-[0.14em] text-paper">
                TRITA PARSI
              </span>
            </div>
            <p className="max-w-85 text-[15px] leading-7 font-light text-slate">
              Author and foreign policy scholar. Co-founder, Quincy Institute
              for Responsible Statecraft.
            </p>
          </div>
          <div className="grid min-w-0 flex-[2] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
            <div>
              <div className="mb-5 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                Books
              </div>
              <div className="flex flex-col gap-3">
                {books.length > 0 ? (
                  books.map((book) => (
                    <Link
                      key={book._id}
                      href="/books"
                      className="text-[14.5px] text-mist hover:text-paper"
                    >
                      {book.title}
                    </Link>
                  ))
                ) : (
                  <Link href="/books" className="text-[14.5px] text-mist hover:text-paper">
                    Books
                  </Link>
                )}
              </div>
            </div>
            <div>
              <div className="mb-5 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                Explore
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/writing" className="text-[14.5px] text-mist hover:text-paper">
                  Writing
                </Link>
                <Link href="/media" className="text-[14.5px] text-mist hover:text-paper">
                  Media
                </Link>
                <Link href="/about" className="text-[14.5px] text-mist hover:text-paper">
                  About
                </Link>
                <Link href="#newsletter" className="text-[14.5px] text-mist hover:text-paper">
                  Newsletter
                </Link>
              </div>
            </div>
            <div>
              <div className="mb-5 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                Contact
              </div>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${press}`} className="text-[14.5px] text-mist hover:text-paper">
                  {press}
                </a>
                <a href={`mailto:${speaking}`} className="text-[14.5px] text-mist hover:text-paper">
                  Speaking inquiries
                </a>
                <span className="text-[14.5px] font-light text-slate">
                  Washington, DC
                </span>
              </div>
            </div>
            <div>
              <div className="mb-5 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                Follow
              </div>
              <div className="flex flex-col gap-3">
                <FollowLink href={settings?.twitterUrl} label="X / Twitter" />
                <FollowLink href={settings?.linkedinUrl} label="LinkedIn" />
                <FollowLink href={settings?.youtubeUrl} label="YouTube" />
                <FollowLink href={settings?.quincyUrl} label="Quincy Institute" />
              </div>
            </div>
          </div>
        </div>
        <div
          id="newsletter"
          className="grid scroll-mt-24 grid-cols-1 items-start gap-10 border-b border-paper/14 py-12 lg:grid-cols-2 lg:gap-14 lg:py-14"
        >
          <div>
            <div className="mb-4 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
              Newsletter
            </div>
            <h2 className="font-display mb-3.5 text-[clamp(26px,2.6vw,34px)] leading-[1.14] font-semibold tracking-[-0.02em] text-paper">
              Analysis before it becomes the headline.
            </h2>
            <p className="max-w-105 text-base leading-7 font-light text-mist">
              New essays, op-eds, and interviews, sent occasionally. No noise.
            </p>
          </div>
          <div>
            {sent ? (
              <div className="border border-gold bg-gold/8 px-7.5 py-7.5">
                <div className="font-display mb-2.5 text-2xl font-semibold text-paper">
                  You’re subscribed.
                </div>
                <p className="text-[15.5px] leading-6.5 text-mist">
                  A confirmation is on its way to {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubscribe} className="flex flex-col gap-3.5">
                <label
                  htmlFor="nl-email"
                  className="text-[11.5px] font-bold tracking-[0.16em] text-slate uppercase"
                >
                  Email address
                </label>
                <div className="flex flex-wrap gap-3">
                  <input
                    id="nl-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="min-w-0 flex-1 border border-paper/28 bg-paper/6 px-4.5 py-4 font-sans text-base text-paper outline-none focus:border-gold"
                  />
                  <button
                    type="submit"
                    className="cursor-pointer bg-burgundy px-7.5 py-4 text-[12.5px] font-bold tracking-[0.14em] text-paper uppercase hover:bg-burgundy-dark"
                  >
                    Subscribe
                  </button>
                </div>
                <span className="text-[13px] text-slate">
                  Unsubscribe at any time.
                </span>
              </form>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-6 pt-7">
          <span className="text-[13px] text-muted">
            © 2026 Trita Parsi. All rights reserved.
          </span>
          <span className="text-[13px] text-muted">Concept mockup — not the live site.</span>
        </div>
      </div>
    </footer>
  );
}

function FollowLink({ href, label }: { href?: string; label: string }) {
  const className = "text-[14.5px] text-mist hover:text-paper";
  if (!href) {
    return <span className={className}>{label}</span>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}
