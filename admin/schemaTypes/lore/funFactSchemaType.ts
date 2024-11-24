export const funFactSchemaType = {
  name: "funFact",
  title: "Le saviez-vous ?",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "content",
      title: "Description",
      type: "text",
    },
  ],
};
