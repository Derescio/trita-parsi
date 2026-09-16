import { defineField, defineType } from "sanity";
import { imageField } from "../shared/image-field";

export const publication = defineType({
  name: "publication",
  title: "Publication",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The newspaper or magazine — e.g. The New York Times. Not the article title.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    imageField("logo", "Logo", true),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
