import { NextResponse } from "next/server";
import { selectCompanyLocationsByCompanyId } from "@/db/locations";
import { convertDBLocationToLocation } from "@/utils/dbTypeConverters";
import type { CompanyLocationsRoute } from "@/types/routes";

export async function GET(
  _request: Request,
  { params }: CompanyLocationsRoute
) {
  try {
    const { companyId } = params;
    if (companyId && typeof companyId === "number") {
      const results = await selectCompanyLocationsByCompanyId(companyId);
      const locations = [...results].map((dbLocation) =>
        convertDBLocationToLocation(dbLocation)
      );
      return NextResponse.json({ locations });
    }
    return NextResponse.json("company id requried", { status: 404 });
  } catch (err) {
    return NextResponse.json(err, { status: 404 });
  }
}
