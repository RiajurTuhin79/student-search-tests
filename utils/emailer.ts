// It is also ok - if u only create the function . But for including into fixture file u need to create a Class. 
// emailer.ts is is not going to be a part of the test (). It is a part of golobal setup . So, don't need to put it in util.fixture.ts

import nodemailer from 'nodemailer';
//import dotenv from 'dotenv';

export async function sendFailureEmail(subject: string, htmlBody: string) {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    //from: `"Search QA" <${process.env.MAIL_USER}>`,
    from: '${process.env.MAIL_USER}',
    //to: 'qa-team@collegeboard.org',
    to: 'riajur.tuhin@gmail.com',
    subject,
    html: htmlBody,
  });
}

/*

import nodemailer, { Transporter } from 'nodemailer';

export class EmailService {
  private transporter: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
  }

  async sendFailureEmail(subject: string, htmlBody: string): Promise<void> {
    await this.transporter.sendMail({
      from: `${process.env.MAIL_USER}`,
      to: 'riajur.tuhin@gmail.com',
      subject,
      html: htmlBody,
    });
  }
}
...................................................................
// const emailService = new EmailService();
//await emailService.sendFailureEmail('Test Subject', '<p>Failure details here</p>');
*/