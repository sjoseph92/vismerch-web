"use client";
import { useEffect} from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }: { address: string }) {
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
            zoom: 4,
            mapId: "VISMERCH_APP_ID",
          });

          const { Marker } = await loader.importLibrary("marker");
          new Marker({ position: results[0].geometry.location, map });
        }
      })();
    }
  }, [address]);
  return <div id="map" className="w-full h-48" />;
}
export default Map;
