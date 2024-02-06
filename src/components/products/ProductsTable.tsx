import TableWrapper from "../shared/TableWrapper";
import { products } from "@/mock/products";

const ProductsTable = () => {
  return (
    <TableWrapper
      title="Products"
      subTitle="A list of all your products"
      buttonA={{ label: "Add Product", color: "orange" }}
    >
      <table className="w-full divide-y divide-gray-300">
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
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              UPC
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
          {products.map((person) => (
            <tr key={person.id}>
              <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                <div className="flex items-center">
                  <div className="h-11 w-11 flex-shrink-0">
                    <img
                      className="h-11 w-11 rounded-full"
                      src={person.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {person.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div className="text-gray-900">{person.gtin}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <div className="text-gray-900">{person.basePrice}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Active
                </span>
              </td>

              <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <a href="#" className="text-orange-600 hover:text-orange-900">
                  Edit<span className="sr-only">, {person.name}</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default ProductsTable;
