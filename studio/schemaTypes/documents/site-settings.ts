import { defineField, defineType } from "sanity";
import { imageField } from "../shared/image-field";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "heroHeadline",
      title: "Hero headline",
      type: "string",
    }),
    defineField({
      name: "heroDek",
      title: "Hero dek",
      type: "text",
      rows: 3,
    }),
    imageField("heroPortrait", "Hero portrait"),
    defineField({
      name: "aboutCopy",
      title: "About copy",
      type: "text",
      rows: 8,
    }),
    imageField("aboutPortrait", "About portrait"),
    defineField({
      name: "pressEmail",
      title: "Press email",
      type: "string",
    }),
    defineField({
      name: "speakingEmail",
      title: "Speaking email",
      type: "string",
    }),
    defineField({
      name: "twitterUrl",
      title: "X / Twitter URL",
      type: "url",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube URL",
      type: "url",
    }),
    defineField({
      name: "quincyUrl",
      title: "Quincy Institute URL",
      type: "url",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
