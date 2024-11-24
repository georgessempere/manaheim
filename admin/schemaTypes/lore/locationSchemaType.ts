import { defineType } from "sanity";

export const locationSchemaType = defineType({
  name: "location",
  title: "Lieu",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "peoples",
      type: "array",
      title: "Personnages",
      of: [{ type: "reference", to: { type: "character" } }],
    },
  ],
});
