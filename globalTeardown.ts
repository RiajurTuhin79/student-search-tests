// Can we use more than 1 globalTeardown in playwright.config.ts? 1 for email notification and another for slack 
// No, Playwright does not support multiple globalTeardown entries in the playwright.config.ts file.
//Playwright expects only a single globalTeardown function, which will be executed once after all tests complete.


// For Only E-mail Notification 
/*import fs from 'fs';
import path from 'path';
import { sendFailureEmail } from './utils/emailer';

async function globalTeardown() {
  const reportPath = path.join(__dirname, 'playwright-report', 'index.html');
  const reportContent = fs.readFileSync(reportPath, 'utf8');

  const failed = reportContent.includes('failed');
  if (failed) {
    await sendFailureEmail('❌ Test Failures - Student Search', reportContent);
  }
}

export default globalTeardown;

*/

// You can combine both teardown actions (email + Slack) into a single file like this:

import { sendFailureEmail } from './utils/emailer';
import { notifySlack } from './utils/slackNotifier';
import fs from 'fs';

async function globalTeardown() {
  const summaryPath = 'playwright-report/.last-run.json';

  if (fs.existsSync(summaryPath)) {
    const summary = JSON.parse(fs.readFileSync(summaryPath, 'utf-8'));
    const { failed = 0, passed = 0 } = summary.statuses || {};

    if (failed > 0) {
      const message = `❌ ${failed} tests failed, ✅ ${passed} passed in Student Search Suite`;
      await Promise.all([
        notifySlack(message),
        sendFailureEmail('❌ Student Search Test Failures', message),
      ]);
    }
  }
}

export default globalTeardown;


// Only for Slack Notification 

/*import { notifySlack } from './utils/slackNotifier';
import fs from 'fs';

async function globalTeardown() {
  const summary = JSON.parse(fs.readFileSync('playwright-report/.last-run.json', 'utf-8'));
  const { failed, passed } = summary.statuses;

  if (failed > 0) {
    await notifySlack(`❌ *${failed}* tests failed, *${passed}* passed in Student Search Suite`);
  }
}
export default globalTeardown;

*/
