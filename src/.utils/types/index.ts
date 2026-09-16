export type SanityImageValue = {
  alt?: string;
  asset?: {
    _ref: string;
    _type: string;
  };
} | null;

export type Publication = {
  _id: string;
  name: string;
  slug: string | null;
  logo: SanityImageValue;
};

export type ArticleKind = "Op-Ed" | "Analysis" | "Commentary" | "Essay";

export type Article = {
  _id: string;
  title: string;
  blurb: string;
  url: string;
  kind?: ArticleKind;
  publishedAt: string;
  image: SanityImageValue;
  publication: Publication | null;
};

export type Book = {
  _id: string;
  title: string;
  blurb?: string;
  url: string;
  cover: SanityImageValue;
  press?: string;
  year?: string;
};

export type Appearance = {
  _id: string;
  title: string;
  blurb: string;
  url: string;
  duration?: string;
  publishedAt: string;
  image: SanityImageValue;
  outlet: Publication | null;
};

export type SiteSettings = {
  heroHeadline?: string;
  heroDek?: string;
  heroPortrait: SanityImageValue;
  aboutCopy?: string;
  aboutPortrait: SanityImageValue;
  pressEmail?: string;
  speakingEmail?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  youtubeUrl?: string;
  quincyUrl?: string;
} | null;
