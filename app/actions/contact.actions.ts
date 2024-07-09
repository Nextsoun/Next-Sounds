"use server";

import { compileAdminTemplate, compileContactTemplate, sendAdminEmail, sendContactEmail } from "../utils/mail.utils";
import prisma from "../utils/prisma.utils";

export const createContact = async (formData: FormData) => {
  try {
    const contactName = formData.get("name")?.toString();
    const contactPhone = formData.get("phone")?.toString();
    const contactEmail = formData.get("email")?.toString();
    const contactMessage = formData.get("message")?.toString();
    console.log({ formData });

    if (!contactName || !contactPhone || !contactEmail || !contactMessage) return;

    const newContact = await prisma.contact.create({
      data: {
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
        message: contactMessage,
      },
    });
    console.log({ newContact });

    const body = compileAdminTemplate(contactName, contactMessage, contactPhone, contactEmail);

    await sendAdminEmail({
      name: contactName,
      message: contactMessage,
      email: contactEmail,
      phone: contactPhone,
      body: body,
    });

    const bodyContact = compileContactTemplate(contactName);

    await sendContactEmail({
      name: contactName,
      email: contactEmail,
      bodyContact: bodyContact,
    });

    return newContact;
  } catch (error) {
    console.error(error);
  }
};
