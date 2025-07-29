// Placeholder for utils/logger.ts
import fs from 'fs';
import path from 'path';

export class Logger {
  private logFilePath: string;

  constructor(filename: string = 'test-log.txt') {
    const logDir = path.resolve(__dirname, '../logs');
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    this.logFilePath = path.join(logDir, filename);
  }

  private writeToFile(message: string) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(this.logFilePath, `[${timestamp}] ${message}\n`);
  }

  info(message: string) {
    console.log(`ℹ️  INFO: ${message}`);
    this.writeToFile(`INFO: ${message}`);
  }

  warn(message: string) {
    console.warn(`⚠️  WARN: ${message}`);
    this.writeToFile(`WARN: ${message}`);
  }

  error(message: string) {
    console.error(`❌ ERROR: ${message}`);
    this.writeToFile(`ERROR: ${message}`);
  }

  success(message: string) {
    console.log(`✅ SUCCESS: ${message}`);
    this.writeToFile(`SUCCESS: ${message}`);
  }
}
