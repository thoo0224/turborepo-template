export * from "@prisma/client";

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const client =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["error", "warn", "query"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;
