import { defineType } from "sanity";

export const locationSchemaType = defineType({
  name: "location",
  title: "Lieu",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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
