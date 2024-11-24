export const characterSchemaType = {
  name: "character",
  title: "Personnage",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
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
      title: "Portrait",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "location",
      type: "reference",
      title: "Résidence",
      to: [{ type: "location" }],
    },
  ],
};
