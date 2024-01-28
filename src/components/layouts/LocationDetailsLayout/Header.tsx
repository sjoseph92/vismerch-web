import { FC } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Tabs from "./Tabs";
import { Location } from "@/types/location";

interface HeaderProps {
  location: Location;
}

const Header: FC<HeaderProps> = ({ location }) => {
  return (
    <div className="px-4 lg:px-0">
      <Breadcrumbs location={location} />
      <h1 className="text-2xl pt-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {location.name}
      </h1>
      <Tabs />
    </div>
  );
};

export default Header;
