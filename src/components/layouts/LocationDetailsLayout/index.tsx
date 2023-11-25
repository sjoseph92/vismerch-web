import { FC, PropsWithChildren } from "react";
import Header from "./Header";

const LocationDetailsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-white h-screen py-10 lg:pl-32">
      <Header />
      {children}
    </main>
  );
};

export default LocationDetailsLayout;
