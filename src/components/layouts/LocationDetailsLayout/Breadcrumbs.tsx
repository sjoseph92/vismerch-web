import { ChevronRightIcon } from "@heroicons/react/20/solid";

const pages = [
  { name: "Projects", href: "#", current: false },
  { name: "Project Nero", href: "#", current: true },
];

const Breadcrumbs = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1 lg:space-x-2">
        <li>
          <a
            href="/locations"
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
            aria-current="page"
          >
            Locations
          </a>
        </li>
        <li>
          <ChevronRightIcon
            className="h-5 w-5 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
        </li>
        <li>
          <a
            href="/locations"
            className="text-sm font-medium text-gray-500 hover:text-gray-700"
            aria-current="page"
          >
            Walgreens #15442
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
