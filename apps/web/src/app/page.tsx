import { Button } from "@cfxstore/ui";
import * as logger from "@cfxstore/logger";
import { userRepository } from "@cfxstore/repository";

export default async function Page() {
  const users = await userRepository.findAll();
  console.log(users);

  return (
    <div className="m-3 bg-red-500 text-fuchsia-50 p-3">
      <Button>Test</Button>
    </div>
  );
}
