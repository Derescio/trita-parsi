import type { Appearance } from "@/.utils/types";
import { SanityImage } from "@/components/sanity-image";

interface AppearanceCardProps {
  appearance: Appearance;
  tone?: "light" | "dark";
}

export function AppearanceCard({ appearance, tone = "light" }: AppearanceCardProps) {
  const titleClass = tone === "dark" ? "text-paper" : "text-navy";
  const dateClass = tone === "dark" ? "text-mist" : "text-muted";

  return (
    <a href={appearance.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative mb-5 aspect-video bg-fog">
        <SanityImage
          image={appearance.image}
          alt={appearance.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/62 via-navy/28 to-transparent" />
        {appearance.duration ? (
          <div className="pointer-events-none absolute bottom-4.5 left-5 flex items-center gap-3.5">
            <span className="flex h-11.5 w-11.5 items-center justify-center border border-paper/75 bg-navy/50">
              <span className="ml-0.75 h-0 w-0 border-y-7 border-y-transparent border-l-11 border-l-paper" />
            </span>
            <span className="text-[11.5px] font-bold tracking-[0.14em] text-paper uppercase">
              {appearance.duration}
            </span>
          </div>
        ) : null}
      </div>
      <div className="mb-2.5 text-[11px] font-bold tracking-[0.16em] text-gold uppercase">
        {appearance.outlet?.name}
      </div>
      <h3 className={`font-display mb-2 text-[21px] leading-[1.28] font-semibold ${titleClass}`}>
        {appearance.title}
      </h3>
      <p className={`text-[14.5px] leading-6 ${dateClass}`}>{appearance.blurb}</p>
    </a>
  );
}
