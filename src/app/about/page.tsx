import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { SanityImage } from "@/components/sanity-image";
import { sanityFetch } from "@/sanity/lib/client";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { SiteSettings } from "@/.utils/types";

export const metadata: Metadata = {
  title: "About",
};

const fallbackCopy = `Trita Parsi is the co-founder and Executive Vice President of the Quincy Institute for Responsible Statecraft, and the former President of the National Iranian American Council. He has taught at Johns Hopkins University, New York University, and George Washington University, and currently teaches at the Edmund A. Walsh School of Foreign Service at Georgetown University in Washington, DC.`;

export default async function AboutPage() {
  const settings = await sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY);
  const paragraphs = (settings?.aboutCopy ?? fallbackCopy)
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <SiteShell>
      <section className="border-t border-line bg-white py-16 lg:py-26">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-18 lg:px-8">
          <div>
            {settings?.aboutPortrait?.asset ? (
              <div className="relative aspect-4/5 bg-fog">
                <SanityImage
                  image={settings.aboutPortrait}
                  alt="Trita Parsi"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  priority
                />
              </div>
            ) : (
              <div className="aspect-4/5 bg-fog" />
            )}
            <div className="font-display text-navy mt-5.5 border-t-2 border-gold pt-5 text-[19px] leading-[1.45]">
              “One of the most distinguished scholars on Iran.”
            </div>
            <div className="mt-2.5 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              Noam Chomsky
            </div>
          </div>
          <div>
            <div className="mb-4.5 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
              About Trita
            </div>
            <h1 className="font-display text-navy mb-7 text-[clamp(30px,3.2vw,42px)] leading-[1.12] font-semibold tracking-[-0.02em]">
              An award-winning author on U.S. foreign policy in the Middle East.
            </h1>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-ink mb-5 text-[17px] leading-[1.72]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
