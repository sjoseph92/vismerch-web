import { string, ZodType, nativeEnum, object, number } from "zod";

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
  id: number;
  name: string;
  gtin: string;
  gtinType: GTINEnum;
  basePrice: string;
  description?: string;
  image?: string;
}

export const productSchema: ZodType<Product> = object({
  id: number(),
  name: string(),
  gtin: string(),
  gtinType: gtinEnumSchema,
  basePrice: string(),
  description: string().optional(),
  image: string().optional(),
});
