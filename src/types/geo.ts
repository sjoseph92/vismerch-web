import { z } from "zod";

export interface GeoJSONPoint {
  type: string;
  coordinates: number[];
}

export const geoJsonSchema: z.ZodType<GeoJSONPoint> = z.object({
  type: z.string(),
  coordinates: z.array(z.number()).length(2),
});

export interface Coordinate {
  lat: number;
  lng: number;
}
