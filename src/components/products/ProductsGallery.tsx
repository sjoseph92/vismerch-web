import { combineClassNames } from "@/utils";

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

const ProductsGallery = () => {
  return (
    <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
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
              {/*eslint-disable-next-line @next/next/no-img-element */}
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
                <span className="sr-only">View details for {file.name}</span>
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
  );
};

export default ProductsGallery;
