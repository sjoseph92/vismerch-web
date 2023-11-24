import { MockProduct, products } from "@/mock/products";
import { combineClassNames } from "@/utils";
import { FC } from "react";

interface ProductCardProps {
  file: MockProduct;
}
const ProductCard: FC<ProductCardProps> = ({ file }) => {
  return (
    <li key={file.name} className="relative">
      <div
        className={combineClassNames(
          file.current
            ? "ring-2 ring-orange-500 ring-offset-2"
            : "focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
          "aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100"
        )}
      >
        {/*eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={file.image}
          alt=""
          className={combineClassNames(
            file.current ? "" : "group-hover:opacity-75",
            "pointer-events-none object-cover"
          )}
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {file.name}</span>
        </button>
      </div>
      <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
        {file.name}
      </p>
      <p className="pointer-events-none block text-sm font-medium text-gray-500">
        {file.basePrice}
      </p>
    </li>
  );
};

export default ProductCard;
