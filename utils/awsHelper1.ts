import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
//import AWS from 'aws-sdk';

export class AWSHelper1 {
  private s3: S3Client;

  constructor() {
    this.s3 = new S3Client({ region: 'us-east-1' });
  }

  async uploadToS3(bucket: string, key: string, body: string | Buffer) {
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body
    });
    await this.s3.send(command);
  }
}
