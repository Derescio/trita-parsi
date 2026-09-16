"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { WritingIndexProps } from "@/.utils/types";
import { WritingCard } from "@/components/writing-card";
import { WritingSidebar } from "@/components/writing-sidebar";

export function WritingIndex({
  articles,
  publications,
  settings,
  activeSlug,
}: WritingIndexProps) {
  const [query, setQuery] = useState("");
  const chips = [{ name: "All", slug: "" }, ...publications];

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return articles;
    return articles.filter((article) => {
      const haystack = [article.title, article.blurb, article.publication?.name]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [articles, query]);

  return (
    <section className="bg-paper px-5 pt-8 pb-18 lg:px-8 lg:pt-10 lg:pb-26">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-5 border-b border-line pb-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => {
              const href = chip.slug ? `/writing?publication=${chip.slug}` : "/writing";
              const on = activeSlug === (chip.slug ?? "");
              return (
                <Link
                  key={chip.name}
                  href={href}
                  className={
                    on
                      ? "bg-navy px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-paper uppercase"
                      : "px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-muted uppercase hover:text-navy"
                  }
                >
                  {chip.name}
                </Link>
              );
            })}
          </div>
          <label className="relative block w-full max-w-72">
            <span className="sr-only">Search articles</span>
            <span className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 text-muted">
              <SearchIcon />
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full border-0 border-b border-hairline bg-transparent py-2 pr-3 pl-7 font-sans text-[14.5px] text-ink outline-none placeholder:text-slate focus:border-navy"
            />
          </label>
        </div>

        <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,1fr)_minmax(280px,320px)]">
          {visible.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {visible.map((article) => (
                <WritingCard key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-muted">
              {query.trim()
                ? "No writing matches that search."
                : "No writing yet. Add articles in Studio."}
            </p>
          )}
          <WritingSidebar settings={settings} />
        </div>
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20 16.5 16.5" />
    </svg>
  );
}
