import { SiteShell } from "@/components/site-shell";
import { ArticleCard } from "@/components/article-card";
import { AppearanceCard } from "@/components/appearance-card";
import { HomeBooksCarousel } from "@/components/home-books-carousel";
import { SanityImage } from "@/components/sanity-image";
import { sanityFetch } from "@/sanity/lib/client";
import { PressLogos } from "@/components/press-logos";
import {
  BOOKS_QUERY,
  FEATURED_APPEARANCES_QUERY,
  FEATURED_ARTICLES_QUERY,
  PUBLICATIONS_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/lib/queries";
import type { Appearance, Article, Book, Publication, SiteSettings } from "@/.utils/types";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  const [settings, articles, books, publications, appearances] = await Promise.all([
    sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY),
    sanityFetch<Article[]>(FEATURED_ARTICLES_QUERY),
    sanityFetch<Book[]>(BOOKS_QUERY),
    sanityFetch<Publication[]>(PUBLICATIONS_QUERY),
    sanityFetch<Appearance[]>(FEATURED_APPEARANCES_QUERY),
  ]);

  return (
    <SiteShell overlayHeader>
      <section className="relative overflow-hidden bg-navy pt-28 lg:pt-35">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#22304c_0%,#141b2e_70%)] opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-navy/70 via-navy/55 to-navy lg:bg-linear-to-r lg:from-navy lg:from-36% lg:via-navy/70 lg:via-58% lg:to-navy/30" />
        <div className="pointer-events-none absolute inset-x-0 top-16 bottom-0 opacity-45 min-[900px]:top-24 min-[900px]:right-[8%] min-[900px]:left-[30%] min-[900px]:opacity-100 min-[900px]:[mask-composite:intersect] min-[900px]:[mask-image:linear-gradient(90deg,transparent,rgba(0,0,0,0.35)_8%,#000_22%,#000_86%,transparent),linear-gradient(180deg,transparent,#000_14%,#000_94%,transparent)] min-[900px]:[-webkit-mask-composite:source-in] min-[900px]:[-webkit-mask-image:linear-gradient(90deg,transparent,rgba(0,0,0,0.35)_8%,#000_22%,#000_86%,transparent),linear-gradient(180deg,transparent,#000_14%,#000_94%,transparent)]">
            {settings?.heroPortrait?.asset ? (
              <SanityImage
                image={settings.heroPortrait}
                alt="Trita Parsi"
                fill
                className="object-cover object-[center_18%]"
                sizes="(min-width: 900px) 42vw, 100vw"
                priority
              />
            ) : (
              <Image
                src="/trita-parsi-hero.png"
                alt="Trita Parsi"
                fill
                className="object-cover object-[center_18%]"
                sizes="(min-width: 900px) 42vw, 100vw"
                priority
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#141B2E_0%,rgba(20,27,46,0.5)_26%,rgba(20,27,46,0)_52%),linear-gradient(0deg,rgba(20,27,46,0.62)_0%,rgba(20,27,46,0)_34%),linear-gradient(180deg,rgba(20,27,46,0.55)_0%,rgba(20,27,46,0)_26%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-140 pb-16 lg:pb-28">
            <h1 className="font-display mb-6.5 max-w-3xl text-[clamp(40px,4.6vw,68px)] leading-[1.06] font-semibold tracking-[-0.02em] text-balance text-paper">
              {settings?.heroHeadline ?? "Understanding the Middle East. Beyond the headlines."}
            </h1>
            <p className="mb-9.5 max-w-130 text-lg leading-[1.65] font-light text-mist">
              {settings?.heroDek ??
                "Author, foreign policy scholar, and co-founder of the Quincy Institute for Responsible Statecraft. Two decades of analysis on Iran, diplomacy, and American power."}
            </p>
            <div className="mb-11 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <Link
                href="/writing"
                className="bg-burgundy px-7.5 py-4.25 text-center text-[12.5px] font-bold tracking-[0.14em] text-paper uppercase hover:bg-burgundy-dark"
              >
                Analysis
              </Link>
              <Link
                href="/media"
                className="inline-flex items-center justify-center gap-3 border border-paper/40 px-7 py-4.25 text-[12.5px] font-bold tracking-[0.14em] text-paper uppercase hover:border-gold"
              >
                <span className="block h-0 w-0 border-y-6 border-y-transparent border-l-9 border-l-paper" />
                Watch Interviews
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-4.5 gap-y-2 border-t border-gold/35 pt-6.5">
              <span className="text-[11.5px] font-semibold tracking-[0.16em] text-gold uppercase">
                Grawemeyer Award Laureate
              </span>
              <span className="h-1 w-1 rounded-full bg-muted" />
              <span className="text-[11.5px] font-semibold tracking-[0.16em] text-slate uppercase">
                Georgetown University
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-22">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-11 px-5 lg:grid-cols-[minmax(220px,0.85fr)_minmax(0,3.2fr)] lg:px-8">
          <div>
            <div className="mb-5.5 flex items-center gap-3.5">
              <span className="block h-0.5 w-8.5 bg-burgundy" />
              <span className="text-[11.5px] font-bold tracking-[0.2em] text-ink uppercase">
                Featured Analysis
              </span>
            </div>
            <h2 className="font-display text-navy mb-5.5 text-[clamp(28px,2.7vw,36px)] leading-[1.18] font-semibold tracking-[-0.02em]">
              In-depth perspectives on a complex region.
            </h2>
            <p className="mb-6.5 text-[15px] leading-[1.72] text-muted">
              Explore Trita Parsi’s latest writing, commentary and analysis on U.S. foreign
              policy, Iran and the Middle East.
            </p>
            <Link href="/writing" className="text-[11.5px] font-bold tracking-[0.16em] text-burgundy uppercase">
              All Writing →
            </Link>
          </div>
          {articles.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-8">
              {articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-muted">Add op-eds in Studio to populate this section.</p>
          )}
        </div>
      </section>

      <section className="bg-navy px-5 py-16 lg:px-8 lg:py-23">
        <div className="mx-auto max-w-7xl">
          <div className="mb-11.5">
            <div className="mb-3.5 text-[11.5px] font-bold tracking-[0.2em] text-gold uppercase">
              Featured Books
            </div>
            <h2 className="font-display mb-4.5 text-[clamp(34px,4vw,54px)] leading-[1.04] font-bold tracking-[-0.025em] text-cream">
              Trita’s Books
            </h2>
            <p className="max-w-140 text-[17px] leading-[1.62] font-light text-mist">
              Three books on Iran, Israel, and American diplomacy — reporting from inside the
              negotiations that shaped the region.
            </p>
          </div>
          <HomeBooksCarousel books={books} />
        </div>
      </section>

      <PressLogos publications={publications} />

      <section className="bg-navy px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div>
              <div className="mb-4.5 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
                Media
              </div>
              <h2 className="font-display max-w-150 text-[clamp(32px,3.4vw,46px)] leading-[1.1] font-semibold tracking-[-0.02em] text-paper">
                Interviews, panels, and testimony.
              </h2>
            </div>
            <Link
              href="/media"
              className="border-b border-gold/60 pb-1.5 text-xs font-bold tracking-[0.14em] text-gold uppercase hover:text-paper"
            >
              View All Interviews →
            </Link>
          </div>
          {appearances.length > 0 ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-8">
              {appearances.map((appearance) => (
                <AppearanceCard key={appearance._id} appearance={appearance} tone="dark" />
              ))}
            </div>
          ) : (
            <p className="text-mist">Add media appearances in Studio to populate this section.</p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
