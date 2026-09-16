import { appearance } from "./documents/appearance";
import { article } from "./documents/article";
import { book } from "./documents/book";
import { outlet } from "./documents/outlet";
import { publication } from "./documents/publication";
import { siteSettings } from "./documents/site-settings";

export const schemaTypes = [
  publication,
  outlet,
  article,
  book,
  appearance,
  siteSettings,
];
