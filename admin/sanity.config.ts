import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes/index.ts";
import { getStartedPlugin } from "./plugins/sanity-plugin-tutorial/index.ts";

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
  name: "default",
  title: "manaheim",

  projectId: "92yfo9si",
  dataset: "dev",

  plugins: [structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
});
