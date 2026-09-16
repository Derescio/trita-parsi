import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { ContactForm } from "@/components/contact-form";
import { sanityFetch } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { SiteSettings } from "@/.utils/types";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Press requests, speaking inquiries, and correspondence for Trita Parsi.",
};

export default async function ContactPage() {
  const settings = await sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY);
  const press = settings?.pressEmail ?? "press@tritaparsi.com";
  const speaking = settings?.speakingEmail ?? "speaking@tritaparsi.com";

  return (
    <SiteShell>
      <section className="bg-navy py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-4.5 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
            Contact
          </div>
          <h1 className="font-display mb-5 max-w-205 text-[clamp(36px,4.2vw,58px)] leading-[1.08] font-semibold tracking-[-0.02em] text-paper">
            Press, speaking, and inquiries.
          </h1>
          <p className="max-w-150 text-[17px] leading-8 font-light text-mist">
            For media requests, speaking engagements, and other correspondence.
            Washington, DC.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 pb-18 lg:px-8 lg:py-18 lg:pb-26">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-18">
          <div>
            <div className="mb-3 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
              Write
            </div>
            <h2 className="font-display text-navy mb-8 text-[clamp(26px,2.6vw,34px)] leading-[1.14] font-semibold tracking-[-0.02em]">
              Send a message.
            </h2>
            <ContactForm />
          </div>
          <aside className="flex flex-col gap-5">
            <Channel
              label="Press"
              detail={press}
              href={`mailto:${press}`}
              note="Interviews, commentary, and media requests."
            />
            <Channel
              label="Speaking"
              detail="Speaking inquiries"
              href={`mailto:${speaking}`}
              note="Lectures, panels, and private briefings."
            />
            <div className="border border-line bg-white px-6 py-7">
              <div className="mb-3 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                Location
              </div>
              <p className="text-navy text-[17px] font-medium">Washington, DC</p>
            </div>
            <div className="border border-line bg-white px-6 py-7">
              <div className="mb-4 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
                Follow
              </div>
              <div className="flex flex-col gap-3">
                <FollowLink href={settings?.twitterUrl} label="X / Twitter" />
                <FollowLink href={settings?.linkedinUrl} label="LinkedIn" />
                <FollowLink href={settings?.youtubeUrl} label="YouTube" />
                <FollowLink href={settings?.quincyUrl} label="Quincy Institute" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}

function Channel({
  label,
  detail,
  href,
  note,
}: {
  label: string;
  detail: string;
  href: string;
  note: string;
}) {
  return (
    <div className="border border-line bg-white px-6 py-7">
      <div className="mb-3 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
        {label}
      </div>
      <a
        href={href}
        className="text-navy hover:text-burgundy mb-2 block text-[17px] font-medium"
      >
        {detail}
      </a>
      <p className="text-[14.5px] leading-6 text-muted">{note}</p>
    </div>
  );
}

function FollowLink({ href, label }: { href?: string; label: string }) {
  const className = "text-[15px] text-ink hover:text-burgundy";
  if (!href) {
    return <span className={className}>{label}</span>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}
