import axios from 'axios';

export async function notifySlack(message: string) {
  const webhook = process.env.SLACK_WEBHOOK;
  if (!webhook) throw new Error("Slack webhook not defined");
  await axios.post(webhook, { text: message });
}
