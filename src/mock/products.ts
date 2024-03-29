import cherryLimeadePoppiPack from "@/public/cherry-limeade-poppi-pack.webp";
import docPopPoppiCan from "@/public/doc-pop-poppi-can.webp";
import orangePoppiCan from "@/public/orange-poppi-can.webp";
import rasberryRosePoppiCan from "@/public/rasberry-rose-poppi-can.webp";
import rasberryRosePoppiPack from "@/public/rasberry-rose-poppi-pack.webp";
import strawberryLemonadePoppiCan from "@/public/strawberry-lemonade-poppi-can.webp";
import { GTINEnum, Product } from "@/types/product";

export interface MockProduct extends Product {
  current: boolean
}

export const products: MockProduct[] = [
  {
    id: 1,
    name: "Poppi Raspberry Rose Prebiotic Soda - 12 fl oz Can",
    image: rasberryRosePoppiCan.src,
    gtin: "709586514894",
    gtinType: GTINEnum.GTIN12,
    basePrice: "$2.49",
    current: false,
  },
  {
    id: 2,
    name: "Poppi Strawberry Lemon Prebiotic Soda - 12 fl oz Can",
    image: strawberryLemonadePoppiCan.src,
    gtin: "709586514856",
    gtinType: GTINEnum.GTIN12,
    basePrice: "$2.49",
    current: false,
  },
  {
    id: 3,
    name: "Poppi Doc Pop Prebiotic Soda - 12 fl oz Can",
    image: docPopPoppiCan.src,
    gtin: "810063710309",
    gtinType: GTINEnum.GTIN12,
    basePrice: "$2.49",
    current: false,
  },
  {
    id: 4,
    name: "Poppi Orange Prebiotic Soda - 12 fl oz Can",
    image: orangePoppiCan.src,
    gtin: "724190812877",
    gtinType: GTINEnum.GTIN12,
    basePrice: "$2.49",
    current: false,
  },
  {
    id: 5,
    name: "Poppi Raspberry Rose Prebiotic Soda - 4pk/12 fl oz Cans",
    image: rasberryRosePoppiPack.src,
    gtin: "810063710064",
    gtinType: GTINEnum.GTIN12,
    basePrice: "$8.99",
    current: false,
  },
  {
    id: 6,
    name: "Poppi Cherry Limeade Prebiotic Beverage - 4pk/12 fl oz Cans",
    image: cherryLimeadePoppiPack.src,
    gtin: "810063710279",
    gtinType: GTINEnum.GTIN12,
    basePrice: "$8.99",
    current: false
  },
];
