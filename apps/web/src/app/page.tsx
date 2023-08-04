import { Button } from "@cfxstore/ui/index";
import * as logger from "@cfxstore/logger";

export default function Page() {
  logger.log("info", "test", "Index");

  return (
    <div className="m-3 bg-red-500 p-3 text-fuchsia-50">
      <Button>Test</Button>
    </div>
  );
}
