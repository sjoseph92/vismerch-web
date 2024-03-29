import { Location } from "@/types/location";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { FC } from "react";
interface BreadcrumbsProps {
  location: Location;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ location }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1 lg:space-x-2">
        <li className="flex items-center">
          <Link
            href="/locations"
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
            aria-current="page"
          >
            Locations
          </Link>
        </li>
        <li className="flex items-center">
          <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
        </li>
        <li className="flex items-center">
          <Link
            href="/locations"
            className="text-sm font-medium text-gray-500 hover:text-gray-700 text-center"
            aria-current="page"
          >
            {location.name}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
