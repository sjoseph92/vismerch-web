import Button from "@/components/shared/Button";
import rasberryRosePoppiCan from "@/public/rasberry-rose-poppi-can.webp";
import strawberryLemonadePoppiCan from "@/public/strawberry-lemonade-poppi-can.webp";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const products = [
  {
    name: "Poppi Raspberry Rose Prebiotic Soda - 12 fl oz Can",
    gtin: "709586514894",
    image: rasberryRosePoppiCan.src,
    qty: 4,
    basePrice: "$2.49",
  },
  {
    name: "Poppi Strawberry Lemon Prebiotic Soda - 12 fl oz Can",
    image: strawberryLemonadePoppiCan.src,
    gtin: "709586514856",
    qty: 2,
    basePrice: "$2.49",
  },
];

const Inventory = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-4">
      <div className="sm:flex sm:items-center justify-end">
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button Icon={PlusCircleIcon} label="Add" />
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    QoH
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {products.map((product) => (
                  <tr key={product.gtin}>
                    <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                      <div className="flex items-center">
                        <div className="h-12 w-12 flex-shrink-0">
                          <Image
                            className="h-12 w-12 rounded-full"
                            src={product.image}
                            alt=""
                            height={48}
                            width={48}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {product.gtin}
                          </div>
                          <div className="mt-1 text-gray-500">
                            {product.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-center text-gray-500">
                      {`${product.qty}`}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      {product.basePrice}
                    </td>
                    <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        Active
                      </span>
                    </td>

                    <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a
                        href="#"
                        className="text-orange-600 hover:text-orange-900"
                      >
                        Edit<span className="sr-only">, {product.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
