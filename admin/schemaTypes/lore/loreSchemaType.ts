export const loreSchemaType = {
    name: "lore",
    title: "Contexte",
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
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
