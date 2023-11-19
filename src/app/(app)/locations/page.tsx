import LocationsTable from "@/components/locations/LocationsTable";
import { Suspense } from "react";
import { selectCompanyLocationsByCompanyId } from "@/db/locations";
import { convertDBLocationToLocation } from "@/utils/dbTypeConverters";

async function getData() {
  const dbLocations = await selectCompanyLocationsByCompanyId(1);
  const locations = dbLocations.map((dbLocation) =>
    convertDBLocationToLocation(dbLocation)
  );

  return locations;
}

export default async function Page() {
  const locations = await getData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationsTable locations={locations ?? []} />
    </Suspense>
  );
}
