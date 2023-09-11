import { getCompanyLocations } from "@/db/locations";
import { NextResponse } from "next/server";

export async function GET() {
  const locations = await getCompanyLocations(1);
  return NextResponse.json(locations);
}
