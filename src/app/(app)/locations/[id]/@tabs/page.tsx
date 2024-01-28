import { FC } from "react";
import { RouteParams } from "@/types/routes";
import LocationDetailsCard from "@/components/locations/details/Overview/LocationDetailsCard";
import OverviewBottomRow from "@/components/locations/details/Overview/OverviewBottomRow";
import { getLocation } from "@/actions/locations";

type LocationDetailsPageRoute = RouteParams<{ id: number }>;

const Page: FC<LocationDetailsPageRoute> = async ({ params }) => {
  const location = await getLocation(params.id);
  return (
    <main className="sm:h-screen py-4">
      <div className="flex flex-col w-full sm:px-6 lg:px-8 gap-5">
        <LocationDetailsCard location={location} />
        <OverviewBottomRow />
      </div>
    </main>
  );
};

export default Page;
