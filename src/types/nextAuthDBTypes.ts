import { Account, TokenSet } from "next-auth";
import {
  AdapterSession,
  AdapterUser,
  AdapterAccount,
} from "next-auth/adapters";

export interface DBSession
  extends Omit<AdapterSession, "userId" | "sessionToken"> {
  user_id: string;
  session_token: string;
}

export interface DBUser extends Omit<AdapterUser, "emailVerified"> {
  email_verified: Date | null;
  hash: string;
}

export interface DBAccount extends Omit<Account, 'type'> {
  user_id: string;
  provider_account_id: string;
  provider: string;
  type: AdapterAccount['type']
}
