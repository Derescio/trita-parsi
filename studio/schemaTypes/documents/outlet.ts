import { defineField, defineType } from "sanity";
import { imageField } from "../shared/image-field";

export const outlet = defineType({
  name: "outlet",
  title: "Outlet",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The network, show, or platform — e.g. TED, CNN, MSNBC.",
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
