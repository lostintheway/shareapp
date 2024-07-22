// logger.ts
import fs from "fs";
import path from "path";

const logDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFile = path.join(
  logDir,
  `app-${new Date().toISOString().split("T")[0]}.log`
);
const logStream = fs.createWriteStream(logFile, { flags: "a" });

function formatLogMessage(level: string, ...args: any[]): string {
  const timestamp = new Date().toISOString();
  const message = args
    .map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : arg))
    .join(" ");
  return `${timestamp} [${level}]: ${message}\n`;
}

export function setupGlobalLogging() {
  const originalConsoleLog = console.log;
  console.log = (...args: any[]) => {
    const logMessage = formatLogMessage("INFO", ...args);
    logStream.write(logMessage);
    originalConsoleLog.apply(console, args);
  };

  const originalConsoleError = console.error;
  console.error = (...args: any[]) => {
    const logMessage = formatLogMessage("ERROR", ...args);
    logStream.write(logMessage);
    originalConsoleError.apply(console, args);
  };

  const originalConsoleWarn = console.warn;
  console.warn = (...args: any[]) => {
    const logMessage = formatLogMessage("WARN", ...args);
    logStream.write(logMessage);
    originalConsoleWarn.apply(console, args);
  };

  process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
  });

  process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
  });
}
