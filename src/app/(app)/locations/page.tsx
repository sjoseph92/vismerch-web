import { Location } from "@/schemas/locations";
import LocationsTable from "@/components/locations/LocationsTable";
import { Suspense } from "react";

async function getData() {
  const res = await fetch("http://localhost:4200/locations");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const locationResponse = (await res.json()) as APIResponse<Location[]>;

  return locationResponse.data;
}

export default async function Page() {
  const locations = await getData();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationsTable locations={locations ?? []} />
    </Suspense>
  );
}
