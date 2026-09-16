import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { ABOUT_HEADLINE, ABOUT_SECTIONS } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: ABOUT_SECTIONS[0]?.paragraphs[0],
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="border-t border-line bg-white py-16 lg:py-26">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-18 lg:px-8">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-4/5 bg-fog">
              <Image
                src="/trita-parsi-about.png"
                alt="Trita Parsi"
                fill
                className="object-cover object-[center_18%]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
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
            <h1 className="font-display text-navy mb-10 text-[clamp(30px,3.2vw,42px)] leading-[1.12] font-semibold tracking-[-0.02em]">
              {ABOUT_HEADLINE}
            </h1>
            <div className="flex flex-col gap-10">
              {ABOUT_SECTIONS.map((section) => (
                <section key={section.heading ?? section.paragraphs[0]?.slice(0, 32)}>
                  {section.heading ? (
                    <h2 className="mb-4 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
                      {section.heading}
                    </h2>
                  ) : null}
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="text-ink mb-5 text-[17px] leading-[1.72] last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
