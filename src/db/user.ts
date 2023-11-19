import { pool } from ".";
import { DBUser } from "@/types/nextAuth";

export const insertUser = async (name: string, email: string, hash: string) => {
  try {
    const insertResults = await pool.query<
      Pick<DBUser, "id" | "name" | "email">
    >(
      "INSERT INTO users(name, email, hash) VALUES($1, $2, $3) RETURNING id, name, email",
      [name, email, hash]
    );

    return insertResults.rows?.[0];
  } catch (err) {
    throw err;
  }
};

export const selectUserByEmail = async (email: string) => {
  try {
    const selectResults = await pool.query<DBUser>(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    return selectResults.rows?.[0];
  } catch (err) {
    throw err;
  }
};
