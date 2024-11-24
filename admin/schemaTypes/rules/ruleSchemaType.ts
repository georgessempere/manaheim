export const ruleSchemaType = {
  name: "rule",
  title: "Règle",
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
