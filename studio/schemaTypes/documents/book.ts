import { defineField, defineType } from "sanity";
import { imageField } from "../shared/image-field";

export const book = defineType({
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    imageField("cover", "Cover", true),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "blurb",
      title: "Blurb",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "press",
      title: "Press",
      type: "string",
      description: "e.g. Yale University Press",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: "e.g. 2017",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
  orderings: [
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "cover" },
  },
});
