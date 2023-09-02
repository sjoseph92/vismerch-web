import {
  PlusCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { combineClassNames } from "@/utils";
import DetailsSideBar from "./DetailsSideBar";

const files = [
  {
    name: "IMG_4985.HEIC",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
    current: true,
  },
  // More files...
];

export default function Example() {
  return (
    <>
      <div className="flex h-full">
        {/* Content area */}
        <div className="flex flex-1 flex-col overflow-hidden">
          {/* Main content */}
          <div className="flex flex-1 items-stretch overflow-hidden">
            <main className="flex-1 overflow-y-auto">
              <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                      Products
                    </h2>
                  </div>
                  <div className="mt-4 flex md:ml-4 md:mt-0">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      <PencilIcon className="h-4 w- mr-2" />
                      Edit
                    </button>
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      <PlusCircleIcon className="h-4 w- mr-2" color="#fff" />
                      Add
                    </button>
                  </div>
                </div>
                {/* Gallery */}
                <section
                  className="mt-8 pb-16"
                  aria-labelledby="gallery-heading"
                >
                  <ul
                    role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
                  >
                    {files.map((file) => (
                      <li key={file.name} className="relative">
                        <div
                          className={combineClassNames(
                            file.current
                              ? "ring-2 ring-orange-500 ring-offset-2"
                              : "focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
                            "aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100"
                          )}
                        >
                          <img
                            src={file.source}
                            alt=""
                            className={combineClassNames(
                              file.current ? "" : "group-hover:opacity-75",
                              "pointer-events-none object-cover"
                            )}
                          />
                          <button
                            type="button"
                            className="absolute inset-0 focus:outline-none"
                          >
                            <span className="sr-only">
                              View details for {file.name}
                            </span>
                          </button>
                        </div>
                        <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                          {file.name}
                        </p>
                        <p className="pointer-events-none block text-sm font-medium text-gray-500">
                          {file.size}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </main>
            {/* Details sidebar */}
            <DetailsSideBar />
          </div>
        </div>
      </div>
    </>
  );
}
