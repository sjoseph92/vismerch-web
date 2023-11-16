import { pool } from ".";
import { DBUser } from "@/types/nextAuthDBTypes";

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
