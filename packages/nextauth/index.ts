import { PrismaAdapter } from "@next-auth/prisma-adapter";
import DiscordProvider from "next-auth/providers/discord";

import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import { client } from "@cfxstore/database";

export function createRouteHandler(options: NextAuthOptions) {
  const handler = NextAuth(options);
  return handler;
}

export function createAuthOptions(
  clientId: string,
  clientSecret: string
): NextAuthOptions {
  return {
    adapter: PrismaAdapter(client),
    providers: [
      DiscordProvider({
        clientId,
        clientSecret,
      }),
    ],
  };
}
