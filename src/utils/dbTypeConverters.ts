import {
  AdapterAccount,
  AdapterSession,
  AdapterUser,
} from "next-auth/adapters";


import { DBAccount, DBSession, DBUser } from "@/types/nextAuth";

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
