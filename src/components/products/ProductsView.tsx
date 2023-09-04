import { PlusCircleIcon, PencilIcon } from "@heroicons/react/24/outline";

import DetailsSideBar from "./DetailsSideBar";
import ProductsGallery from "./ProductsGallery";
import PageHeader from "./PageHeader";

export default function ProductsView() {
  return (
    <div className="flex flex-1 items-stretch overflow-hidden">
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <PageHeader />
          <ProductsGallery />
        </div>
      </main>
      <DetailsSideBar />
    </div>
  );
}
