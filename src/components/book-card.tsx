import type { Book } from "@/.utils/types";
import { SanityImage } from "@/components/sanity-image";

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

export function BookCard({ book, featured = false }: BookCardProps) {
  return (
    <article
      className={
        featured
          ? "grid grid-cols-1 items-start gap-14 border-b border-line py-18 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)]"
          : "flex flex-col gap-5"
      }
    >
      <div className="relative aspect-2/3 bg-fog">
        <SanityImage
          image={book.cover}
          alt={book.title}
          fill
          className="object-contain"
          sizes="300px"
        />
      </div>
      <div>
        <h2
          className={`font-display text-navy font-semibold tracking-[-0.02em] ${
            featured
              ? "mb-5 text-[clamp(28px,2.8vw,38px)] leading-[1.15]"
              : "text-[19px] leading-[1.2]"
          }`}
        >
          {book.title}
        </h2>
        {book.blurb ? (
          <p className="text-ink mb-8.5 max-w-155 text-[17px] leading-[1.72]">{book.blurb}</p>
        ) : null}
        <a
          href={book.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-navy px-7 py-4 text-xs font-bold tracking-[0.14em] text-paper uppercase hover:bg-burgundy"
        >
          Buy Now
        </a>
      </div>
    </article>
  );
}
