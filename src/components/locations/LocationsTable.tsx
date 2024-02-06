import { Location } from "@/types/location";
import { FC } from "react";
import LocationsTableRow from "./LocationsTableRow";
import TableWrapper from "../shared/TableWrapper";

interface LocationsTableProps {
  locations: Location[];
}

const LocationsTable: FC<LocationsTableProps> = ({ locations }) => {
  return (
    <TableWrapper
      title="Locations"
      subTitle="A list of all locations carrying your product"
      buttonA={{ label: "Add Location", color: "orange" }}
    >
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
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Brand
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              City
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              State
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Zip Code
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {locations.map((location) => (
            <LocationsTableRow location={location} key={location.id} />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default LocationsTable;
