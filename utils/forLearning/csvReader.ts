import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

export class CSVReader {
  async readCSV(filePath: string): Promise<any[]> {
    const fullPath = path.resolve(filePath);
    const results: any[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(fullPath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => resolve(results))
        .on('error', reject);
    });
  }
}
