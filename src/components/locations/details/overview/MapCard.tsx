// 290 E Bay St,,Charleston,SC,29403
"use client";
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Card from "@/components/shared/Card";

const MapCard = ({ address }: { address: string }) => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });
      (async () => {
        const { Geocoder } = await loader.importLibrary("geocoding");
        const { results } = await new Geocoder().geocode({ address });
        const { Map } = await loader.importLibrary("maps");
        const mapElement = document.getElementById("map");
        if (mapElement && results[0]) {
          const map = new Map(mapElement, {
            center: results[0].geometry.location,
            zoom: 12,
            mapId: "VISMERCH_APP_ID",
          });

          const { Marker } = await loader.importLibrary("marker");
          new Marker({ position: results[0].geometry.location, map });
        }
      })();
    }
  }, [address]);
  return (
    <Card withPadding={false}>
      <div id="map" className="w-full h-full" />
    </Card>
  );
};
export default MapCard;
