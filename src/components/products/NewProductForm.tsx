import { UserCircleIcon } from "@heroicons/react/24/solid";

import { gtinTypes } from "@/schemas/products";
import FormWrapper from "../forms/FormWrapper";
import { createNewProduct } from "@/actions/createNewProduct";

const NewProductForm = () => {
  return (
    <FormWrapper action={createNewProduct} title="Add Product">
      <div className="col-span-full">
        <label
          htmlFor="photo"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Photo
        </label>
        <div className="mt-2 flex items-center gap-x-3">
          <UserCircleIcon
            className="h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          <button
            type="button"
            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Change
          </button>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="gtin"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          GTIN
        </label>
        <div className="mt-2">
          <input
            id="gtin"
            name="gtin"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="gtinType"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          GTIN Type
        </label>
        <div className="mt-2">
          <select
            id="gtinType"
            name="gtinType"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            {gtinTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="sm:col-span-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="mt-2">
          <input
            id="name"
            name="name"
            type="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Price ($)
        </label>
        <div className="mt-2">
          <input
            id="price"
            name="price"
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="col-span-full">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows={3}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
            defaultValue={""}
          />
        </div>
      </div>
    </FormWrapper>
  );
};

export default NewProductForm;
