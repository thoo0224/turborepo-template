import "server-only";

import { getServerSession } from "next-auth/next";

import { createAuthOptions } from "@cfxstore/nextauth";

export const authOptions = createAuthOptions(
  process.env.DISCORD_CLIENT_ID!,
  process.env.DISCORD_CLIENT_SECRET!
);

export async function getServerAuthSession() {
  return getServerSession(authOptions);
}
