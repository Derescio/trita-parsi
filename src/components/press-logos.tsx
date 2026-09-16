import Link from "next/link";
import type { Publication } from "@/.utils/types";
import { SanityImage } from "@/components/sanity-image";

interface PressLogosProps {
  publications: Publication[];
}

export function PressLogos({ publications }: PressLogosProps) {
  if (publications.length === 0) return null;

  return (
    <section className="bg-paper py-21">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-11 text-center">
          <div className="mb-3.5 text-[11.5px] font-bold tracking-[0.2em] text-[#7A5F22] uppercase">
            Where Trita Has Been Published
          </div>
          <h2 className="font-display text-navy text-[clamp(26px,2.6vw,34px)] leading-[1.14] font-semibold tracking-[-0.02em]">
            Reporting and commentary across the foreign policy press.
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(184px,1fr))] gap-4">
          {publications.map((publication) => {
            const href = publication.slug
              ? `/writing?publication=${publication.slug}`
              : "/writing";
            return (
              <Link
                key={publication._id}
                href={href}
                aria-label={publication.name}
                className="grid h-29 place-items-center border border-navy bg-white px-5 py-3.5 shadow-[0_10px_24px_rgba(20,27,46,0.16)] transition-[box-shadow,border-color,transform] duration-200 hover:-translate-y-0.75 hover:border-navy hover:shadow-[0_16px_32px_rgba(20,27,46,0.24)]"
              >
                {publication.logo?.asset ? (
                  <SanityImage
                    image={publication.logo}
                    alt={publication.name}
                    width={320}
                    className="h-auto max-h-16 w-auto max-w-[132px] object-contain"
                  />
                ) : (
                  <span className="font-display text-navy text-center text-sm font-semibold">
                    {publication.name}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
