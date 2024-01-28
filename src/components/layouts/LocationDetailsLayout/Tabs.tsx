import { LOCATION_DETAIL_TABS } from "@/consts";
import TabItem from "./TabItem";

export default function Tabs() {
  return (
    <div className="py-4 lg:py-0">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base text-black focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
          defaultValue={""}
        >
          {LOCATION_DETAIL_TABS.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {LOCATION_DETAIL_TABS.map((tab) => (
              <TabItem tab={tab} key={tab.name} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
