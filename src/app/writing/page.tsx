import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PublicationFilter, WritingTile } from "@/components/article-card";
import { sanityFetch } from "@/sanity/lib/client";
import { ARTICLES_QUERY, WRITING_PUBLICATIONS_QUERY } from "@/sanity/lib/queries";
import type { Article, Publication } from "@/.utils/types";

export const metadata: Metadata = {
  title: "Writing",
};

export default async function WritingPage({
  searchParams,
}: {
  searchParams: Promise<{ publication?: string | string[] }>;
}) {
  const params = await searchParams;
  const slug = typeof params.publication === "string" ? params.publication : "";

  const [articles, publications] = await Promise.all([
    sanityFetch<Article[]>(ARTICLES_QUERY, { slug }),
    sanityFetch<Publication[]>(WRITING_PUBLICATIONS_QUERY),
  ]);

  return (
    <SiteShell>
      <section className="bg-navy py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-4.5 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
            Writing
          </div>
          <h1 className="font-display mb-6.5 max-w-205 text-[clamp(36px,4.2vw,58px)] leading-[1.08] font-semibold tracking-[-0.02em] text-paper">
            Op-eds, essays, and analysis.
          </h1>
          <p className="max-w-140 text-[17px] leading-7 font-light text-mist">
            Filter by publication.
          </p>
        </div>
      </section>
      <section className="bg-paper px-5 pt-8 pb-18 lg:px-8 lg:pt-11 lg:pb-26">
        <div className="mx-auto max-w-7xl">
          <PublicationFilter publications={publications} activeSlug={slug} />
          {articles.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-px border border-line bg-line">
              {articles.map((article) => (
                <WritingTile key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-muted">No writing yet. Add articles in Studio.</p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
