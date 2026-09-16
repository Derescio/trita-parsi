import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { AppearanceCard } from "@/components/appearance-card";
import { sanityFetch } from "@/sanity/lib/client";
import { APPEARANCES_QUERY } from "@/sanity/lib/queries";
import type { Appearance } from "@/.utils/types";

export const metadata: Metadata = {
  title: "Media",
};

export default async function MediaPage() {
  const appearances = await sanityFetch<Appearance[]>(APPEARANCES_QUERY);

  return (
    <SiteShell>
      <section className="bg-navy py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-4.5 text-[11.5px] font-bold tracking-[0.18em] text-gold uppercase">
            Media
          </div>
          <h1 className="font-display max-w-205 text-[clamp(36px,4.2vw,58px)] leading-[1.08] font-semibold tracking-[-0.02em] text-paper">
            Interviews, panels, and congressional testimony.
          </h1>
        </div>
      </section>
      <section className="bg-paper px-5 py-12 pb-18 lg:px-8 lg:py-18 lg:pb-26">
        <div className="mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-10">
          {appearances.length > 0 ? (
            appearances.map((appearance) => (
              <AppearanceCard key={appearance._id} appearance={appearance} />
            ))
          ) : (
            <p className="text-muted">Add media appearances in Studio to populate this page.</p>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
