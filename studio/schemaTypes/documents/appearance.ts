import { defineField, defineType } from "sanity";
import { imageField } from "../shared/image-field";

export const appearance = defineType({
  name: "appearance",
  title: "Appearance",
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
    imageField("image", "Still"),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "outlet",
      title: "Outlet",
      type: "reference",
      to: [{ type: "outlet" }],
      description: "The network, show, or platform this appearance ran on.",
      validation: (rule) =>
        rule.custom((value, context) => {
          const parent = context.parent as { publication?: unknown } | undefined;
          if (value || parent?.publication) return true;
          return "Outlet is required";
        }),
    }),
    defineField({
      name: "publication",
      title: "Publication (legacy)",
      type: "reference",
      to: [{ type: "publication" }],
      hidden: true,
    }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Optional, e.g. 12:04",
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
      subtitle: "outlet.name",
      media: "image",
    },
  },
});
