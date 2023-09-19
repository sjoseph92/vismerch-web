import { object, string, z } from "zod";

export const gtinEnum = z.enum(["GTIN-8", "GTIN-12", "GTIN-13", "GTIN-14"]);
export type GtinEnumType = z.infer<typeof gtinEnum>;

export const gtinTypes = [
  gtinEnum.Enum["GTIN-8"],
  gtinEnum.Enum["GTIN-12"],
  gtinEnum.Enum["GTIN-13"],
  gtinEnum.Enum["GTIN-14"],
];

export const newProductSchema = object({
  name: string(),
  gtin: string(),
  gtinType: gtinEnum,
  price: string(),
  description: string().optional(),
  image: string().optional(),
});

export type ZNewProduct = z.infer<typeof newProductSchema>;
