import { sanityFetch } from "@/sanity/lib/client";
import { BOOKS_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import type { Book, SiteSettings } from "@/.utils/types";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface SiteShellProps {
  children: React.ReactNode;
  overlayHeader?: boolean;
}

export async function SiteShell({ children, overlayHeader = false }: SiteShellProps) {
  const [settings, books] = await Promise.all([
    sanityFetch<SiteSettings>(SITE_SETTINGS_QUERY),
    sanityFetch<Book[]>(BOOKS_QUERY),
  ]);

  return (
    <div className="flex min-h-full flex-col bg-paper text-ink">
      <SiteHeader overlay={overlayHeader} />
      <div className="flex-1">{children}</div>
      <SiteFooter settings={settings} books={books} />
    </div>
  );
}
