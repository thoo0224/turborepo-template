import { Injectable, ConsoleLogger } from "@nestjs/common";

import * as logger from "logger";

@Injectable()
export class LoggerService extends ConsoleLogger {
  log(message: unknown, context?: unknown, ..._rest: unknown[]): void {
    logger.log("info", message as string, context as string);
  }

  error(message: any, stack?: string, context?: string): void {
    logger.log("error", message as string, context as string);
    if (stack) logger.log("error", stack, context as string);
  }

  warn(message: any, context?: string): void {
    logger.log("warn", message as string, context as string);
  }

  debug(message: any, context?: string): void {
    logger.log("debug", message as string, context as string);
  }

  verbose(message: any, context?: string): void {
    logger.log("verbose", message as string, context as string);
  }
}
