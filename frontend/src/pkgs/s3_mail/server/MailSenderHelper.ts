import { SendEmailCommand } from "@aws-sdk/client-ses";
import { SESClient } from "@aws-sdk/client-ses";

export const MailSenderHelper = {
  sendMail: async (config: { title: string; body: string; fromMail: string; toMail: string[]; ccMail: string[] }) => {
    const sendEmailCommand = new SendEmailCommand({
      Destination: {
        /* required */
        CcAddresses: [
          /* more items */
          ...config.ccMail,
        ],
        ToAddresses: [
          ...config.toMail,
          /* more To-email addresses */
        ],
      },
      Message: {
        /* required */
        Body: {
          /* required */
          Html: {
            Charset: "UTF-8",
            Data: config.body,
          },
        },
        Subject: {
          Charset: "UTF-8",
          Data: config.title,
        },
      },
      Source: config.fromMail,
      ReplyToAddresses: [
        /* more items */
      ],
    });

    const sesClient = new SESClient({
      region: process.env.AWS_SES_REGION,
      credentials: {
        accessKeyId: process.env.AWS_SES_SMTP_USER + "",
        secretAccessKey: process.env.AWS_SES_SMTP_PASSWORD + "",
      },
    });
    return await sesClient.send(sendEmailCommand);
  },
  sendMailWithDefault: async (config: { title: string; body: string; toMail: string[]; ccMail: string[] }) => {
    return await MailSenderHelper.sendMail({
      title: config.title,
      body: config.body,
      fromMail: process.env.AWS_SES_DEFAULT_SEND_MAIL + "",
      toMail: config.toMail,
      ccMail: config.ccMail,
    });
  },
};
