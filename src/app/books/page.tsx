import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { BookCard } from "@/components/book-card";
import { sanityFetch } from "@/sanity/lib/client";
import { BOOKS_QUERY } from "@/sanity/lib/queries";
import type { Book } from "@/.utils/types";

export const metadata: Metadata = {
  title: "Books",
};

export default async function BooksPage() {
  const books = await sanityFetch<Book[]>(BOOKS_QUERY);

  return (
    <SiteShell>
      <section className="bg-navy py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-4.5 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
            Books
          </div>
          <h1 className="font-display max-w-205 text-[clamp(36px,4.2vw,58px)] leading-[1.08] font-semibold tracking-[-0.02em] text-paper">
            Three volumes on Iran, Israel, and American diplomacy.
          </h1>
        </div>
      </section>
      <section className="bg-paper px-5 pb-18 lg:px-8 lg:pb-26">
        <div className="mx-auto max-w-7xl">
          {books.length > 0 ? (
            books.map((book) => <BookCard key={book._id} book={book} featured />)
          ) : (
            <p className="py-18 text-muted">Add books in Studio to populate this page.</p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
