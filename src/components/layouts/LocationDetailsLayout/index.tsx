import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import { Location } from "@/types/location";

interface LocationDetailsLayoutProps extends PropsWithChildren {
  location: Location;
}

const LocationDetailsLayout: FC<LocationDetailsLayoutProps> = ({
  children,
  location,
}) => {
  return (
    <main className="bg-white h-screen py-10 lg:pl-32 lg:pr-12">
      <Header location={location} />
      {children}
    </main>
  );
};

export default LocationDetailsLayout;
