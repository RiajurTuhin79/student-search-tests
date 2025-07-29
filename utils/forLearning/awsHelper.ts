import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

export class AWSHelper {
  private s3: AWS.S3;
  private bucket: string;

  constructor(bucketName: string, region: string = 'us-east-1') {
    this.s3 = new AWS.S3({ region });
    this.bucket = bucketName;
  }

  async uploadToS3(localFilePath: string, s3Key: string): Promise<void> {
    const fileContent = fs.readFileSync(localFilePath);

    const params: AWS.S3.PutObjectRequest = {
      Bucket: this.bucket,
      Key: s3Key,
      Body: fileContent,
    };

    try {
      await this.s3.putObject(params).promise();
      console.log(`✅ Uploaded ${s3Key} to S3 bucket ${this.bucket}`);
    } catch (err) {
      console.error(`❌ Failed to upload ${s3Key} to S3:`, err);
      throw err;
    }
  }

  static async sendSlackNotification(message: string, webhookUrl: string): Promise<void> {
    try {
      await axios.post(webhookUrl, {
        text: message,
      });
      console.log(`📢 Slack message sent`);
    } catch (error) {
      console.error(`❌ Failed to send Slack message:`, error);
    }
  }
}
