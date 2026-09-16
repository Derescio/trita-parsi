import { defineField, defineType } from "sanity";
import { imageField } from "../shared/image-field";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "blurb",
      title: "Blurb",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    imageField("image", "Image"),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "publication",
      title: "Publication",
      type: "reference",
      to: [{ type: "publication" }],
      description: "The newspaper or magazine this piece ran in.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      options: {
        list: [
          { title: "Op-Ed", value: "Op-Ed" },
          { title: "Analysis", value: "Analysis" },
          { title: "Commentary", value: "Commentary" },
          { title: "Essay", value: "Essay" },
        ],
        layout: "radio",
      },
    }),
  ],
  orderings: [
    {
      title: "Published, newest",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "publication.name",
      media: "image",
    },
  },
});
