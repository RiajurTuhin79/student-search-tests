import { chromium } from '@playwright/test';
import fs from 'fs';

type EnvConfig = {
  name: string;
  baseURL: string;
  username: string;
  password: string;
  storageFile: string;
};

const configs: Record<string, EnvConfig> = {
  dev: {
    name: 'dev',
    baseURL: 'https://rahulshettyacademy.com/client',
    //baseURL: 'https://www.google.com',
    username: 'tuhin79@gmail.com',
    password: 'Dhaka1216!',
    storageFile: 'dev-user-storage.json',
  },
  stage: {
    name: 'stage',
    baseURL: 'https://stage.search.collegeboard.org',
    //baseURL: 'https://www.amazon.com',
    username: 'stage_user',
    password: 'stage_pass',
    storageFile: 'stage-user-storage.json',
  }
};

async function generateStorageState(env: EnvConfig) {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`🔐 Logging into ${env.name.toUpperCase()}...`);
  //await page.goto(`${env.baseURL}/login`);
  await page.goto(`${env.baseURL}`);

  await page.fill('#userEmail', env.username);
  await page.fill('#userPassword', env.password);
  await page.getByRole('button', { name: 'Login' }).click;
  //await page.waitForURL(`${env.baseURL}/#/dashboard/dash`);
  await page.waitForLoadState('networkidle');

  await context.storageState({ path: env.storageFile });
  console.log(`✅ Storage state saved: ${env.storageFile}`);
  await browser.close();
}

export default async function globalSetup() {
  const envName = process.env.ENV || 'dev';
  const env = configs[envName];

  if (!env) {
    throw new Error(`Unsupported environment "${envName}". Use ENV=dev or ENV=stage`);
  }

  await generateStorageState(env);
}
