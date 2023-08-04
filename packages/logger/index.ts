import * as winston from "winston";

type LogLevel = "info" | "warn" | "debug" | "error" | "verbose";

const logger = winston.createLogger({
  level: "info" as LogLevel,
  format: winston.format.combine(
    winston.format.printf((info) => formatter(info))
  ),
  transports: [
    new winston.transports.Console(),
    // You can add additional transports here if needed
  ],
});

function formatter(info: winston.Logform.TransformableInfo): string {
  const finalLevel = info.level.toUpperCase();
  const context = info.splat?.join(" ");
  const finalContext = context ? ` [${context}]` : "";
  const date = new Date().toISOString();

  return `[${finalLevel}] [${date}]${finalContext} ${info.message}`;
}

export function log(level: LogLevel, message: string, context?: string): void {
  logger.log(level, message, { context });
}
