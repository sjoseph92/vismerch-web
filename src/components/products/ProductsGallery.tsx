import { products } from "@/mock/products";
import ProductCard from "./ProductCard";

const ProductsGallery = () => {
  return (
    <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        {products.map((file) => (
          <ProductCard key={file.id} file={file} />
        ))}
      </ul>
    </section>
  );
};

export default ProductsGallery;
