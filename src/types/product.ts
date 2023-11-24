import { string, ZodType, nativeEnum, object } from "zod";

export enum GTINEnum {
  GTIN8 = "GTIN-8",
  GTIN12 = "GTIN-12",
  GTIN13 = "GTIN-13",
  GTIN14 = "GTIN-14",
}

export const gtinEnumSchema = nativeEnum(GTINEnum);

export const gtinTypes = [
  GTINEnum.GTIN8,
  GTINEnum.GTIN12,
  GTINEnum.GTIN13,
  GTINEnum.GTIN14,
];

export interface Product {
  name: string;
  gtin: string;
  gtinType: GTINEnum;
  price: string;
  description?: string;
  image?: string;
}

export const productSchema: ZodType<Product> = object({
  name: string(),
  gtin: string(),
  gtinType: gtinEnumSchema,
  price: string(),
  description: string().optional(),
  image: string().optional(),
});
