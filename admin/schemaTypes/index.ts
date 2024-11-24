import { characterSchemaType } from "./lore/characterSchemaType.ts";
import { locationSchemaType } from "./lore/locationSchemaType.ts";
import { ruleSchemaType } from "./rules/ruleSchemaType.ts";
import { funFactSchemaType } from "./lore/funFactSchemaType.ts";
import { quoteSchemaType } from "./lore/quoteSchemaType.ts";
import { loreSchemaType } from "./lore/loreSchemaType.ts";

export const schemaTypes = [
  loreSchemaType,
  locationSchemaType,
  characterSchemaType,
  quoteSchemaType,
  funFactSchemaType,
  ruleSchemaType,
];
