"use client";

import { FormEvent, useState, type ReactNode } from "react";
import type { SiteSettings } from "@/.utils/types";

interface WritingSidebarProps {
  settings: SiteSettings;
}

export function WritingSidebar({ settings }: WritingSidebarProps) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSent(true);
  }

  return (
    <aside className="flex flex-col gap-6">
      <div className="relative overflow-hidden bg-navy px-7 py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,#2a3a58_0%,transparent_55%)] opacity-80" />
        <div className="relative">
          <div className="mb-3 text-[11px] font-bold tracking-[0.18em] text-gold uppercase">
            Stay connected
          </div>
          <h2 className="font-display mb-3 text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-paper">
            Join the Newsletter
          </h2>
          <p className="mb-6 text-[14.5px] leading-6.5 text-mist">
            Thoughtful updates, new articles, and upcoming events — delivered
            straight to your inbox.
          </p>
          {sent ? (
            <p className="border border-gold/50 bg-gold/10 px-4 py-3 text-[14.5px] text-paper">
              You’re subscribed. A confirmation is on its way to {email}.
            </p>
          ) : (
            <form onSubmit={onSubscribe} className="flex gap-0">
              <label htmlFor="writing-nl-email" className="sr-only">
                Email address
              </label>
              <input
                id="writing-nl-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-w-0 flex-1 bg-white px-3.5 py-3.5 font-sans text-[15px] text-ink outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex w-12 shrink-0 cursor-pointer items-center justify-center bg-burgundy text-lg text-paper hover:bg-burgundy-dark"
              >
                →
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border border-line bg-white px-7 py-9 text-center">
        <div className="font-display mb-4 text-[42px] leading-none text-gold">“</div>
        <p className="font-display text-navy mx-auto mb-6 max-w-70 text-[22px] leading-[1.35] font-medium tracking-[-0.02em] text-pretty">
          Better questions lead to a deeper understanding of the world — and to
          better decisions.
        </p>
        <div className="mb-8 text-[11px] font-bold tracking-[0.16em] text-muted uppercase">
          — Trita Parsi
        </div>
        <div className="mb-4 text-[11px] font-bold tracking-[0.18em] text-muted uppercase">
          Follow
        </div>
        <div className="flex items-center justify-center gap-5">
          <SocialLink href={settings?.twitterUrl} label="X">
            <XIcon />
          </SocialLink>
          <SocialLink href={settings?.linkedinUrl} label="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
          <SocialLink href={settings?.youtubeUrl} label="YouTube">
            <YouTubeIcon />
          </SocialLink>
        </div>
      </div>
    </aside>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href?: string;
  label: string;
  children: ReactNode;
}) {
  const className = "text-navy hover:text-burgundy";
  if (!href) {
    return (
      <span aria-label={label} className={className}>
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
      <path d="M18.9 2H22l-6.8 7.8L23 22h-7.1l-4.9-7.4L5.4 22H2.3l7.3-8.3L1 2h7.2l4.4 6.7L18.9 2Zm-1.2 18h1.9L6.4 3.9H4.4L17.7 20Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
      <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3V9.5ZM10 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9.5Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.75 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  );
}
