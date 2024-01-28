"use server";
import { selectLocationByLocationId } from "@/db/locations";
import { convertDBLocationToLocation } from "@/utils/dbTypeConverters";

export async function getLocation(locationId: number) {
  const dbLocation = await selectLocationByLocationId(locationId);
  const location = convertDBLocationToLocation(dbLocation);

  return location;
}
