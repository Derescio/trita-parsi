import Link from "next/link";
import type { Article } from "@/.utils/types";
import { SanityImage } from "@/components/sanity-image";

interface ArticleCardProps {
  article: Article;
  tone?: "light" | "dark";
}

export function ArticleCard({ article, tone = "light" }: ArticleCardProps) {
  const titleClass = tone === "dark" ? "text-paper" : "text-navy";
  const blurbClass = tone === "dark" ? "text-mist" : "text-muted";
  const dateClass = tone === "dark" ? "text-mist" : "text-muted";

  return (
    <article className="flex flex-col">
      {article.image?.asset ? (
        <div className="relative mb-5 aspect-video bg-fog">
          <SanityImage
            image={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
      ) : null}
      <div className="mb-3 flex min-h-9 flex-wrap items-center gap-x-3.5 gap-y-2">
        {article.publication?.logo?.asset ? (
          <SanityImage
            image={article.publication.logo}
            alt={article.publication.name}
            width={224}
            className="h-auto max-h-7 w-auto max-w-32 shrink-0 object-contain object-left"
          />
        ) : article.publication ? (
          <span className="font-display text-navy text-base font-semibold">
            {article.publication.name}
          </span>
        ) : null}
        {article.kind ? (
          <span className="text-[10.5px] font-bold tracking-[0.18em] text-burgundy uppercase">
            {article.kind}
          </span>
        ) : null}
      </div>
      <h3
        className={`font-display mb-3.5 text-[21px] leading-[1.28] font-semibold tracking-[-0.01em] break-words text-pretty ${titleClass}`}
      >
        {article.title}
      </h3>
      <p className={`mb-5.5 text-[14.5px] leading-7 ${blurbClass}`}>{article.blurb}</p>
      <div className="mt-auto flex items-center justify-between gap-3">
        {article.publishedAt ? (
          <time className={`text-[12.5px] ${dateClass}`} dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        ) : (
          <span />
        )}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.18em] text-burgundy uppercase"
        >
          Read More →
        </a>
      </div>
    </article>
  );
}

interface WritingTileProps {
  article: Article;
}

export function WritingTile({ article }: WritingTileProps) {
  return (
    <article className="flex min-h-75 flex-col bg-white px-5 py-7 hover:bg-paper sm:px-7.5 sm:py-8.5">
      <div className="mb-5.5 flex items-center gap-3 border-b border-line pb-4.5">
        <span className="font-display text-navy text-base font-semibold">
          {article.publication?.name ?? "Publication"}
        </span>
        {article.kind ? (
          <span className="ml-auto text-[10.5px] font-bold tracking-[0.16em] text-gold uppercase">
            {article.kind}
          </span>
        ) : null}
      </div>
      <h3 className="font-display text-navy mb-3.5 text-2xl leading-[1.25] font-semibold tracking-[-0.015em] text-pretty">
        {article.title}
      </h3>
      <p className="mb-6 text-[15px] leading-[1.68] text-muted">{article.blurb}</p>
      <div className="mt-auto flex items-center justify-between">
        <span className="text-[12.5px] text-muted">{formatDate(article.publishedAt)}</span>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11.5px] font-bold tracking-[0.14em] text-burgundy uppercase"
        >
          Read →
        </a>
      </div>
    </article>
  );
}

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function PublicationFilter({
  publications,
  activeSlug,
}: {
  publications: { name: string; slug: string | null }[];
  activeSlug?: string;
}) {
  const chips = [{ name: "All", slug: "" }, ...publications];

  return (
    <div className="mb-11 flex flex-wrap gap-2.5 border-b border-line pb-9">
      {chips.map((chip) => {
        const href = chip.slug ? `/writing?publication=${chip.slug}` : "/writing";
        const on = (activeSlug ?? "") === (chip.slug ?? "");
        return (
          <Link
            key={chip.name}
            href={href}
            className={
              on
                ? "border border-navy bg-navy px-4.5 py-2.75 text-[11.5px] font-bold tracking-[0.12em] text-paper uppercase"
                : "border border-hairline px-4.5 py-2.75 text-[11.5px] font-bold tracking-[0.12em] text-muted uppercase hover:border-navy hover:text-navy"
            }
          >
            {chip.name}
          </Link>
        );
      })}
    </div>
  );
}
