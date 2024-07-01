import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import mustache from "mustache";
import { templateAdmin } from "./templateAdmin.utils";
import { templateContact } from "./templateContact.utils";

export async function sendAdminEmail({
  name,
  phone,
  email,
  message,
  body,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  body: string;
}) {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD,
    },
  } as SMTPTransport.Options);
  try {
    const testResultAdmin = await transport.verify();
    console.log("listo para enviar emails Admin: ", testResultAdmin);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: MAIL_USER,
      to: MAIL_USER,
      subject: "Solicitud de contacto",
      html: body,
    });
    // console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}

export function compileAdminTemplate(name: string, message: string, phone: string, email: string) {
  const template = mustache.render(templateAdmin, {
    contactName: name,
    contactMessage: message,
    contactPhone: phone,
    contactEmail: email,
  });

  return template;
}

export async function sendContactEmail({
  name,
  email,
  bodyContact,
}: {
  name: string;
  email: string;
  bodyContact: string;
}) {
  const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD,
    },
  } as SMTPTransport.Options);
  try {
    const testResult = await transport.verify();
    console.log("listo para enviar emails Contact: ", testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: MAIL_USER,
      to: email,
      subject: "Solicitud de contacto recibida",
      html: bodyContact,
    });
  } catch (error) {
    console.log(error);
  }
}

export function compileContactTemplate(name: string) {
  const template = mustache.render(templateContact, {
    contactName: name,
  });

  return template;
}
