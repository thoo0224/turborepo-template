import { Button } from "@cfxstore/ui";
import * as logger from "@cfxstore/logger";
import { PrismaClient } from "@cfxstore/database";

export default async function Page() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  console.log(users);

  return (
    <div className="m-3 bg-red-500 p-3 text-fuchsia-50">
      <Button>Test</Button>
    </div>
  );
}