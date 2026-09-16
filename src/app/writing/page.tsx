import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { WritingIndex } from "@/components/writing-index";
import { sanityFetch } from "@/sanity/lib/client";
import { ARTICLES_QUERY, SITE_SETTINGS_QUERY, WRITING_PUBLICATIONS_QUERY } from "@/sanity/lib/queries";
import type { Article, Publication, SiteSettings } from "@/.utils/types";

export const metadata: Metadata = {
  title: "Writing",
  description: "Op-eds, essays, and analysis on Iran, diplomacy, and American power.",
};

export default async function WritingPage({
  searchParams,
}: PageProps<"/writing">) {
  const params = await searchParams;
  const slug = typeof params.publication === "string" ? params.publication : "";

  const [articles, publications, settings] = await Promise.all([
    sanityFetch<Article[]>(ARTICLES_QUERY, { slug }),
    sanityFetch<Publication[]>(WRITING_PUBLICATIONS_QUERY),
    sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY),
  ]);

  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-navy">
        <div className="pointer-events-none absolute inset-y-0 right-0 left-[18%] min-[900px]:left-[36%]">
          <Image
            src="/writing-hero.png"
            alt=""
            fill
            className="object-cover object-[center_35%]"
            sizes="70vw"
            priority
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-navy from-32% via-navy/88 via-58% to-navy/25" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-22">
          <div className="max-w-150">
            <div className="mb-4.5 flex items-center gap-3">
              <span className="block h-0.5 w-6 bg-gold" />
              <span className="text-[11.5px] font-bold tracking-[0.2em] text-gold uppercase">
                Writing
              </span>
            </div>
            <h1 className="font-display mb-5 text-[clamp(36px,4.6vw,62px)] leading-[1.06] font-semibold tracking-[-0.03em] text-paper">
              Op-eds, essays, and analysis.
            </h1>
            <p className="max-w-115 text-[17px] leading-[1.7] font-light text-mist">
              Op-eds and analysis on Iran, diplomacy, and the issues that shape
              American power.
            </p>
          </div>
        </div>
      </section>
      <WritingIndex
        articles={articles}
        publications={publications}
        settings={settings}
        activeSlug={slug}
      />
    </SiteShell>
  );
}
