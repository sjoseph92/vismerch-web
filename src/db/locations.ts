import { DBLocation } from "@/types/location";
import { pool } from ".";

export const selectCompanyLocationsByCompanyId = async (companyId: number) => {
  try {
    const selectResults = await pool.query<DBLocation>(
      `
        SELECT
            locations.id,
            locations.name,
            locations.brand,
            locations.address_line_1,
            locations.address_line_2,
            locations.city,
            locations.state,
            locations.zip_code,
            ST_AsGeoJSON (ST_Transform (locations.coordinate, 4326)) as geo_json
        FROM
            company_locations
            LEFT JOIN locations ON company_locations.location_id = locations.id
        WHERE
            company_locations.company_id = $1;
      `,
      [companyId]
    );
    return selectResults.rows;
  } catch (err) {
    throw err;
  }
};

export const selectLocationByLocationId = async (locationId: number) => {
  try {
    const selectResults = await pool.query<DBLocation>(
      `
        SELECT
            id,
            name,
            brand,
            address_line_1,
            address_line_2,
            city,
            state,
            zip_code,
            ST_AsGeoJSON (ST_Transform (coordinate, 4326)) as geo_json
        FROM
            locations
        WHERE
            id = $1;
      `,
      [locationId]
    );
    return selectResults.rows?.[0];
  } catch (err) {
    throw err;
  }
};

