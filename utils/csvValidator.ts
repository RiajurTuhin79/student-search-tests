import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export class CSVValidator {
  static readCSV(filePath: string): any[] {
    const content = fs.readFileSync(filePath, 'utf-8');
    const records = parse(content, {
      columns: true,       // return rows as objects with header keys
      skip_empty_lines: true,
      trim: true
    });
    return records;
  }

  static validateHeaders(csvRows: any[], expectedHeaders: string[]): boolean {
    if (!csvRows.length) return false;
    const actualHeaders = Object.keys(csvRows[0]);
    return expectedHeaders.every(h => actualHeaders.includes(h));
  }

  static validateRowCount(csvRows: any[], expectedCount: number): boolean {
    return csvRows.length === expectedCount;
  }

  static validateField(csvRows: any[], field: string, expectedValues: string[]): boolean {
    return csvRows.every(row => expectedValues.includes(row[field]));
  }
}
