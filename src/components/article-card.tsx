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
            {formatArticleDate(article.publishedAt)}
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

export function formatArticleDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
