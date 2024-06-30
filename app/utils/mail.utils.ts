import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== "development", //true
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
} as SMTPTransport.Options);

type Address = {
  name: string;
  address: string;
};

type SendEmailDTO = {
  sender: Address;
  recipients: Address[];
  subject: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailDTO) => {
  const { sender, recipients, subject, message } = dto;

  return await transport.sendMail({
    from: sender,
    to: recipients,
    subject,
    html: message,
    text: message,
  });
};
