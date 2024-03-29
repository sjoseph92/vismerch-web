import { DBAccount, DBSession, DBUser } from "@/types/nextAuth";
import {
  convertDBAccountToAdapterAccount,
  convertDBSessionToAdapterSession,
  convertDBUserToAdapterUser,
} from "@/utils/dbTypeConverters";
import {
  Adapter,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters";
import { Pool } from "pg";

export default function PostgresAdapter(client: Pool): Adapter {
  return {
    async createVerificationToken(
      verificationToken: VerificationToken
    ): Promise<VerificationToken> {
      const { identifier, expires, token } = verificationToken;
      const sql = `
        INSERT INTO verification_token ( identifier, expires, token ) 
        VALUES ($1, $2, $3)
        `;
      await client.query<VerificationToken>(sql, [identifier, expires, token]);
      return verificationToken;
    },
    async useVerificationToken({
      identifier,
      token,
    }: {
      identifier: string;
      token: string;
    }): Promise<VerificationToken | null> {
      const sql = `delete from verification_token
      where identifier = $1 and token = $2
      RETURNING identifier, expires, token `;
      const result = await client.query<VerificationToken>(sql, [identifier, token]);
      return result.rowCount !== 0 ? result.rows[0] : null;
    },

    async createUser(user: Omit<AdapterUser, "id">) {
      const { name, email, emailVerified, image } = user;
      const sql = `
        INSERT INTO users (name, email, email_verified, image) 
        VALUES ($1, $2, $3, $4) 
        RETURNING id, name, email, email_verified, image`;
      const result = await client.query<DBUser>(sql, [
        name,
        email,
        emailVerified,
        image,
      ]);
      const adapterUser = convertDBUserToAdapterUser(result.rows[0]);
      return adapterUser;
    },
    async getUser(id) {
      const sql = `select * from users where id = $1`;
      try {
        const result = await client.query<DBUser>(sql, [id]);
        if (result.rowCount === 0) {
          return null;
        }
        const adapterUser = convertDBUserToAdapterUser(result.rows[0]);
        return adapterUser;
      } catch (e) {
        return null;
      }
    },
    async getUserByEmail(email) {
      const sql = `select * from users where email = $1`;
      const result = await client.query<DBUser>(sql, [email]);
      if (result.rowCount === 0) {
        return null;
      }
      const adapterUser = convertDBUserToAdapterUser(result.rows[0]);
      return adapterUser;
    },
    async getUserByAccount({
      providerAccountId,
      provider,
    }): Promise<AdapterUser | null> {
      const sql = `
          select u.* from users u join accounts a on u.id = a.user_id
          where 
          a.provider = $1 
          and 
          a.provider_account_id = $2`;

      const result = await client.query<DBUser>(sql, [
        provider,
        providerAccountId,
      ]);
      if (result.rowCount === 0) {
        return null;
      }
      const adapterUser = convertDBUserToAdapterUser(result.rows[0]);
      return adapterUser;
    },
    async updateUser(user: Partial<AdapterUser>): Promise<AdapterUser> {
      const fetchSql = `select * from users where id = $1`;
      const query1 = await client.query(fetchSql, [user.id]);
      const oldUser = convertDBUserToAdapterUser(query1.rows[0]);

      const newUser = {
        ...oldUser,
        ...user,
      };

      const { id, name, email, emailVerified, image } = newUser;
      const updateSql = `
        UPDATE users set
        name = $2, email = $3, email_verified = $4, image = $5
        where id = $1
        RETURNING name, id, email, email_verified, image
      `;
      const query2 = await client.query<DBUser>(updateSql, [
        id,
        name,
        email,
        emailVerified,
        image,
      ]);
      return convertDBUserToAdapterUser(query2.rows[0]);
    },
    async linkAccount(account) {
      const sql = `
      insert into accounts 
      (
        user_id, 
        provider, 
        type, 
        provider_account_id, 
        access_token,
        expires_at,
        refresh_token,
        id_token,
        scope,
        session_state,
        token_type
      )
      values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
      returning
        id,
        user_id, 
        provider, 
        type, 
        provider_account_id, 
        access_token,
        expires_at,
        refresh_token,
        id_token,
        scope,
        session_state,
        token_type
      `;

      const params = [
        account.userId,
        account.provider,
        account.type,
        account.providerAccountId,
        account.access_token,
        account.expires_at,
        account.refresh_token,
        account.id_token,
        account.scope,
        account.session_state,
        account.token_type,
      ];

      const result = await client.query<DBAccount>(sql, params);
      return convertDBAccountToAdapterAccount(result.rows[0]);
    },
    async createSession({ sessionToken, userId, expires }) {
      if (userId === undefined) {
        throw Error(`userId is undef in createSession`);
      }
      const sql = `insert into sessions (user_id, expires, session_token)
      values ($1, $2, $3)
      RETURNING id, session_token, user_id, expires`;

      const result = await client.query<DBSession>(sql, [
        userId,
        expires,
        sessionToken,
      ]);
      const adapterSession = convertDBSessionToAdapterSession(result.rows[0]);
      return adapterSession;
    },

    async getSessionAndUser(sessionToken: string | undefined): Promise<{
      session: AdapterSession;
      user: AdapterUser;
    } | null> {
      if (sessionToken === undefined) {
        return null;
      }
      const result1 = await client.query<DBSession>(
        `select * from sessions where session_token = $1`,
        [sessionToken]
      );
      if (result1.rowCount === 0) {
        return null;
      }
      let session: AdapterSession = convertDBSessionToAdapterSession(
        result1.rows[0]
      );

      const result2 = await client.query<DBUser>(
        "select * from users where id = $1",
        [session.userId]
      );
      if (result2.rowCount === 0) {
        return null;
      }
      const user = convertDBUserToAdapterUser(result2.rows[0]);
      return {
        session,
        user,
      };
    },
    async updateSession(
      session: Partial<AdapterSession> & Pick<AdapterSession, "sessionToken">
    ): Promise<AdapterSession | null | undefined> {
      const { sessionToken } = session;
      const result1 = await client.query<DBSession>(
        `select * from sessions where session_token = $1`,
        [sessionToken]
      );
      if (result1.rowCount === 0) {
        return null;
      }
      const originalSession: AdapterSession = convertDBSessionToAdapterSession(
        result1.rows[0]
      );

      const newSession: AdapterSession = {
        ...originalSession,
        ...session,
      };
      const sql = `
        UPDATE sessions set
        expires = $2
        where session_token = $1
        `;
      const result = await client.query<DBSession>(sql, [
        newSession.sessionToken,
        newSession.expires,
      ]);
      const adapterSession = convertDBSessionToAdapterSession(result.rows[0]);
      return adapterSession;
    },
    async deleteSession(sessionToken) {
      const sql = `delete from sessions where session_token = $1`;
      await client.query(sql, [sessionToken]);
    },
    async unlinkAccount(partialAccount) {
      const { provider, providerAccountId } = partialAccount;
      const sql = `delete from accounts where provider_account_id = $1 and provider = $2`;
      await client.query(sql, [providerAccountId, provider]);
    },
    async deleteUser(userId: string) {
      await client.query(`delete from users where id = $1`, [userId]);
      await client.query(`delete from sessions where user_id = $1`, [userId]);
      await client.query(`delete from accounts where user_id = $1`, [userId]);
    },
  };
}
