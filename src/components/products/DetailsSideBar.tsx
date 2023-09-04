import { HeartIcon } from "@heroicons/react/24/outline";
import { PencilIcon, PlusIcon } from "@heroicons/react/20/solid";

const currentFile = {
  name: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    "Uploaded by": "Marie Culver",
    Created: "June 8, 2020",
    "Last modified": "June 8, 2020",
    Dimensions: "4032 x 3024",
    Resolution: "72 x 72",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
    },
    {
      id: 2,
      name: "Andrea McMillan",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};

const DetailsSideBar = () => {
  return (
    <aside className="hidden w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block">
      <div className="space-y-6 pb-16">
        <div>
          <div className="aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src={currentFile.source} alt="" className="object-cover" />
          </div>
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                <span className="sr-only">Details for </span>
                {currentFile.name}
              </h2>
              <p className="text-sm font-medium text-gray-500">
                {currentFile.size}
              </p>
            </div>
            <button
              type="button"
              className="relative ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span className="absolute -inset-1.5" />
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Favorite</span>
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Information</h3>
          <dl className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200">
            {Object.keys(currentFile.information).map((key) => (
              <div
                key={key}
                className="flex justify-between py-3 text-sm font-medium"
              >
                <dt className="text-gray-500">{key}</dt>
                <dd className="whitespace-nowrap text-gray-900">
                  {currentFile.information[key]}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Description</h3>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-sm italic text-gray-500">
              Add a description to this image.
            </p>
            <button
              type="button"
              className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <span className="absolute -inset-1.5" />
              <PencilIcon className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Add description</span>
            </button>
          </div>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">Shared with</h3>
          <ul
            role="list"
            className="mt-2 divide-y divide-gray-200 border-b border-t border-gray-200"
          >
            {currentFile.sharedWith.map((person) => (
              <li
                key={person.id}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center">
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.imageUrl}
                    alt=""
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="ml-4 text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                </div>
                <button
                  type="button"
                  className="ml-6 rounded-md bg-white text-sm font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Remove<span className="sr-only"> {person.name}</span>
                </button>
              </li>
            ))}
            <li className="flex items-center justify-between py-2">
              <button
                type="button"
                className="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="ml-4 text-sm font-medium text-orange-600 group-hover:text-orange-500">
                  Share
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-3">
          <button
            type="button"
            className="flex-1 rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Download
          </button>
          <button
            type="button"
            className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Delete
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DetailsSideBar;
