"use client";
import { FC } from "react";
import { Location } from "@/types/location";
import { useRouter } from "next/navigation";

interface LocationsTableRowProps {
  location: Location;
}

const LocationsTableRow: FC<LocationsTableRowProps> = ({ location }) => {
  const router = useRouter();
  const onClick = () => router.push(`/locations/${location.id}`);

  return (
    <tr onClick={onClick}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        {location.name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {location.brand}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {location.city}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {location.state}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {location.zipCode}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <a href="#" className="text-orange-600 hover:text-orange-900">
          Edit
          <span className="sr-only">, {location.name}</span>
        </a>
      </td>
    </tr>
  );
};

export default LocationsTableRow;
