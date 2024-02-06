/* eslint-disable @next/next/no-img-element */
import Card from "@/components/shared/Card";
import { Location } from "@/types/location";
import { FC } from "react";

interface LocationDetailsCardProps {
  location: Location;
}

const LocationDetailsCard: FC<LocationDetailsCardProps> = ({ location }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_2.5fr] gap-5">
      <Card>
        <img
          src="/ht.png"
          height="100%"
          width="100%"
          className="w-full h-full"
          alt="current location"
        />
      </Card>
      <Card>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Location Information
          </h3>
        </div>
        <div className="mt-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2">
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Brand
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {location.brand}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Street address
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {location.addressLine1}
              </dd>
            </div>
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                City, State
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {`${location.city}, ${location.state}`}
              </dd>
            </div>
            
            <div className="border-t border-gray-100 px-4 py-6 sm:col-span-1 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Zip code
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                {location.zipCode}
              </dd>
            </div>
          </dl>
        </div>
      </Card>
    </div>
  );
};

export default LocationDetailsCard;
