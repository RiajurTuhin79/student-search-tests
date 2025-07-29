// *** Put only those Util files (classes) into the fixture file that are used by "test" . That's why - emailer.ts, slackNotifier.ts 
// don't need to be put in util.fixture.ts file . 
// They are used by "globalTeardown.ts" file - We can use them as Class formate or as Function formate 

import { test as base } from '@playwright/test';
import { DatabaseClient } from '../utils/database';
import { CSVValidator } from '../utils/csvValidator';
import { AWSHelper1 } from '../utils/awsHelper1';
import { Logger } from '../utils/logger';
//import {EmailService} from '../utils/emailer';

type UtilsFixtures = {
    dbClientFixture: DatabaseClient;
    csvValidatorFixture: CSVValidator;
    awsHelperFixture: AWSHelper1;
    loggerFixture: Logger;
    //emailServiceFixture : EmailService;
};

export const test = base.extend<UtilsFixtures>({
    dbClientFixture: async ({ }, use) => {
        const db = new DatabaseClient();
        await db.connect(); // optional: if connect is required
        await use(db);
        await db.disconnect(); // optional: clean up
    },

    csvValidatorFixture: async ({ }, use) => {
        const reader = new CSVValidator();
        await use(reader);
    },

    awsHelperFixture: async ({ }, use) => {
        const aws = new AWSHelper1();
        await use(aws);
    },

    loggerFixture: async ({ }, use) => {
        const log = new Logger();
        await use(log);

    }

    //emailServiceFixture: async({}, use)=>{
        //const emailService = new EmailService();
       // await use(emailService);
    //}
});

export { expect } from '@playwright/test';
