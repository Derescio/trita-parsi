"use client";

import { useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Book } from "@/.utils/types";
import { SanityImage } from "@/components/sanity-image";

interface HomeBooksCarouselProps {
  books: Book[];
}

function pressLine(book: Book) {
  return [book.press, book.year].filter(Boolean).join(" · ");
}

export function HomeBooksCarousel({ books }: HomeBooksCarouselProps) {
  const [active, setActive] = useState(0);

  if (books.length === 0) {
    return <p className="text-mist">Add books in Studio to populate this section.</p>;
  }

  const last = books.length - 1;
  const columns = books.map((_, index) => (index === active ? "2.2fr" : "1fr")).join(" ");

  return (
    <div>
      <div
        className="grid grid-cols-1 items-stretch gap-6 min-[960px]:grid-cols-[var(--book-cols)]"
        style={{ "--book-cols": columns } as CSSProperties}
      >
        {books.map((book, index) => {
          const line = pressLine(book);
          if (index === active) {
            return (
              <article
                key={book._id}
                className="grid grid-cols-1 items-start gap-6.5 rounded-[10px] border border-gold/50 bg-[rgba(26,35,55,0.86)] p-6.5 min-[720px]:grid-cols-[minmax(130px,0.75fr)_minmax(0,1.25fr)]"
              >
                <div className="relative aspect-2/3 shadow-[0_18px_40px_rgba(0,0,0,0.5)]">
                  <SanityImage
                    image={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 960px) 22vw, 200px"
                  />
                </div>
                <div className="flex flex-col">
                  {line ? (
                    <div className="mb-3.5 text-[11px] font-bold tracking-[0.14em] text-gold uppercase">
                      {line}
                    </div>
                  ) : null}
                  <h3 className="font-display mb-4 text-[clamp(20px,1.9vw,27px)] leading-[1.16] font-semibold tracking-[-0.015em] text-pretty text-cream">
                    {book.title}
                  </h3>
                  {book.blurb ? (
                    <p className="mb-6.5 text-[15px] leading-[1.62] text-slate">
                      {book.blurb}
                    </p>
                  ) : null}
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start bg-gold px-6 py-3.5 text-[11.5px] font-bold tracking-[0.16em] text-navy uppercase hover:bg-[#c4a458]"
                  >
                    Buy Now →
                  </a>
                </div>
              </article>
            );
          }

          return (
            <article
              key={book._id}
              role="button"
              tabIndex={0}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive(index);
                }
              }}
              className="flex cursor-pointer flex-col gap-4.5 rounded-[10px] border border-gold/16 bg-[rgba(26,35,55,0.62)] p-5.5 text-left hover:border-gold/55 hover:bg-[rgba(26,35,55,0.86)]"
            >
              <div className="relative mx-auto aspect-2/3 w-29.5 shadow-[0_14px_30px_rgba(0,0,0,0.45)]">
                <SanityImage
                  image={book.cover}
                  alt={book.title}
                  fill
                  className="object-contain"
                  sizes="118px"
                />
              </div>
              {line ? (
                <div className="text-[10.5px] font-bold tracking-[0.14em] text-gold uppercase">
                  {line}
                </div>
              ) : null}
              <h3 className="font-display text-[19px] leading-[1.2] font-semibold tracking-[-0.01em] text-pretty text-cream">
                {book.title}
              </h3>
            </article>
          );
        })}
      </div>

      <div className="mt-8.5 flex items-center justify-between gap-6">
        <Link href="/books" className="text-xs font-bold tracking-[0.14em] text-gold uppercase">
          View all books →
        </Link>
        {books.length > 1 ? (
          <div className="flex gap-3.5">
            <button
              type="button"
              aria-label="Previous book"
              onClick={() => setActive((index) => (index === 0 ? last : index - 1))}
              className="flex h-11.5 w-11.5 cursor-pointer items-center justify-center rounded-full border border-gold/45 text-[17px] text-gold hover:border-gold hover:text-cream"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next book"
              onClick={() => setActive((index) => (index === last ? 0 : index + 1))}
              className="flex h-11.5 w-11.5 cursor-pointer items-center justify-center rounded-full border border-gold/45 text-[17px] text-gold hover:border-gold hover:text-cream"
            >
              →
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
