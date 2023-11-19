import {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
} from "next-auth/adapters";

import { DBAccount, DBSession, DBUser } from "@/types/nextAuth";
import { DBLocation, Location } from "@/types/location";
import { Coordinate, geoJsonSchema } from "@/types/geo";

export const convertDBSessionToAdapterSession = (
  dbSession: DBSession
): AdapterSession => {
  return {
    ...dbSession,
    userId: dbSession.user_id,
    sessionToken: dbSession.session_token,
  };
};

export const convertDBUserToAdapterUser = (dbUser: DBUser): AdapterUser => {
  return {
    ...dbUser,
    emailVerified: dbUser.email_verified,
  };
};

export const convertDBAccountToAdapterAccount = (
  dbAccount: DBAccount
): AdapterAccount => {
  return {
    ...dbAccount,
    userId: dbAccount.user_id,
    providerAccountId: dbAccount.provider_account_id,
  };
};

export const convertDBLocationToLocation = (
  dbLocation: DBLocation
): Location => {
  const parsedGeoJson = geoJsonSchema.parse(JSON.parse(dbLocation.geo_json));
  const coordinate: Coordinate = {
    lat: parsedGeoJson.coordinates?.[1],
    lng: parsedGeoJson.coordinates?.[0],
  };
  return {
    id: dbLocation.id,
    name: dbLocation.name,
    brand: dbLocation.brand,
    addressLine1: dbLocation.address_line_1,
    addressLine2: dbLocation.address_line_2,
    city: dbLocation.city,
    state: dbLocation.state,
    zipCode: dbLocation.zip_code,
    coordinate,
  };
};
