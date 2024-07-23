"use server";

import { compileAdminTemplate, compileContactTemplate, sendAdminEmail, sendContactEmail } from "../utils/mail.utils";
import prisma from "../lib/prisma";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const createContact = async (formData: FormData): Promise<ContactFormData> => {
  try {
    const contactName = formData.get("name")?.toString();
    const contactPhone = formData.get("phone")?.toString();
    const contactEmail = formData.get("email")?.toString();
    const contactMessage = formData.get("message")?.toString();

    if (!contactName || !contactPhone || !contactEmail || !contactMessage) {
      throw new Error("Todos los campos son requeridos.");
    }

    const newContact = await prisma.contact.create({
      data: {
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
        message: contactMessage,
      },
    });

    Promise.all([
      sendAdminEmail({
        name: contactName,
        message: contactMessage,
        email: contactEmail,
        phone: contactPhone,
        body: compileAdminTemplate(contactName, contactMessage, contactPhone, contactEmail),
      }),
      sendContactEmail({
        name: contactName,
        email: contactEmail,
        bodyContact: compileContactTemplate(contactName),
      }),
    ]).catch((error) => {
      console.error("Error al enviar correos electrónicos:", error);
    });

    return newContact;
  } catch (error) {
    console.error("Error en createContact:", error);
    throw new Error("Error al crear el contacto");
  }
};
