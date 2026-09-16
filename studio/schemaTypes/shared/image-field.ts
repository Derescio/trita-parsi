import { defineField } from "sanity";

export function imageField(name: string, title: string, required = false) {
  return defineField({
    name,
    title,
    type: "image",
    options: { hotspot: true },
    validation: required ? (rule) => rule.required() : undefined,
    fields: [
      defineField({
        name: "alt",
        type: "string",
        title: "Alternative text",
        validation: (rule) => rule.required().warning("Add alt text"),
      }),
    ],
  });
}
