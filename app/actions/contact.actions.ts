"use server";

import prisma from "../utils/prisma";

export const createContact = async (formData: FormData) => {
  const contactName = formData.get("name")?.toString();
  const contactPhone = formData.get("phone")?.toString();
  const contactEmail = formData.get("email")?.toString();
  const contactMessage = formData.get("message")?.toString();

  if (!contactName || !contactPhone || !contactEmail || !contactMessage) return;

  const newContact = await prisma.contact.create({
    data: {
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
      message: contactMessage,
    },
  });
  return newContact;
};
