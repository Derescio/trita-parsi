import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site settings"),
        ),
      S.divider(),
      S.listItem()
        .title("Publications")
        .child(S.documentTypeList("publication").title("Publications")),
      S.listItem()
        .title("Outlets")
        .child(S.documentTypeList("outlet").title("Outlets")),
      S.listItem()
        .title("Writing")
        .child(S.documentTypeList("article").title("Writing")),
      S.listItem()
        .title("Books")
        .child(S.documentTypeList("book").title("Books")),
      S.listItem()
        .title("Media")
        .child(S.documentTypeList("appearance").title("Media")),
    ]);
