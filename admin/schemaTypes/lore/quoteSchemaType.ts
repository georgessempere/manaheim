export const quoteSchemaType = {
  name: "quote",
  title: "Citation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "quote",
      title: "Citation",
      type: "text",
    },
    {
      name: "author",
      title: "Auteur",
      type: "reference",
      to: [{ type: "character" }],
      weak: true,
    },
  ],
};
