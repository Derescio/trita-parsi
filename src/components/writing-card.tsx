import type { Article } from "@/.utils/types";
import { formatArticleDate } from "@/components/article-card";
import { SanityImage } from "@/components/sanity-image";

interface WritingCardProps {
  article: Article;
}

export function WritingCard({ article }: WritingCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-fog">
        {article.image?.asset ? (
          <SanityImage
            image={article.image}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 28vw, 100vw"
          />
        ) : null}
      </div>
      <div className="flex flex-1 flex-col px-1 pt-5 pb-2">
        {article.publication?.name ? (
          <div className="mb-2.5 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
            {article.publication.name}
          </div>
        ) : null}
        <h2 className="font-display text-navy mb-3 text-[22px] leading-[1.22] font-semibold tracking-[-0.02em] text-pretty group-hover:text-burgundy">
          {article.title}
        </h2>
        <p className="mb-5 line-clamp-3 text-[14.5px] leading-[1.65] text-muted">{article.blurb}</p>
        <div className="mt-auto text-[13px] text-muted">
          {formatArticleDate(article.publishedAt)}
          <span className="ml-1.5 text-navy">→</span>
        </div>
      </div>
    </a>
  );
}
