import React from "react";
import SeeAllCards from "./SeeAllCards";
import Card from "../shared/Card";
import MostReplenished from "./MostReplenishedCard";
import MostFacings from "./MostReplenishedCard";
import Map from "./USA";

const DashboardTopRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[2.5fr_1fr] gap-5">
      <SeeAllCards />
      <Map />
    </div>
  );
};

export default DashboardTopRow;
