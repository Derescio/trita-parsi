import { groq } from "next-sanity";

const publicationFields = groq`
  _id,
  name,
  "slug": slug.current,
  logo
`;

const articleFields = groq`
  _id,
  title,
  blurb,
  url,
  kind,
  publishedAt,
  image,
  publication->{
    ${publicationFields}
  }
`;

const appearanceFields = groq`
  _id,
  title,
  blurb,
  url,
  duration,
  publishedAt,
  image,
  "outlet": coalesce(outlet->, publication->){
    ${publicationFields}
  }
`;

export const SITE_SETTINGS_QUERY = groq`
  *[_id == "siteSettings"][0]{
    heroHeadline,
    heroDek,
    heroPortrait,
    aboutCopy,
    aboutPortrait,
    pressEmail,
    speakingEmail,
    twitterUrl,
    linkedinUrl,
    youtubeUrl,
    quincyUrl
  }
`;

export const FEATURED_ARTICLES_QUERY = groq`
  *[_type == "article" && defined(title)] | order(publishedAt desc)[0...3]{
    ${articleFields}
  }
`;

export const ARTICLES_QUERY = groq`
  *[_type == "article" && defined(title) && ($slug == "" || publication->slug.current == $slug)] | order(publishedAt desc) {
    ${articleFields}
  }
`;

export const PUBLICATIONS_QUERY = groq`
  *[_type == "publication"] | order(name asc) {
    ${publicationFields}
  }
`;

export const WRITING_PUBLICATIONS_QUERY = groq`
  *[_type == "publication" && count(*[_type == "article" && references(^._id)]) > 0] | order(name asc) {
    ${publicationFields}
  }
`;

export const BOOKS_QUERY = groq`
  *[_type == "book"] | order(coalesce(sortOrder, 999) asc, title asc) {
    _id,
    title,
    blurb,
    url,
    cover,
    press,
    year
  }
`;

export const FEATURED_APPEARANCES_QUERY = groq`
  *[_type == "appearance"] | order(publishedAt desc)[0...3]{
    ${appearanceFields}
  }
`;

export const APPEARANCES_QUERY = groq`
  *[_type == "appearance"] | order(publishedAt desc) {
    ${appearanceFields}
  }
`;
