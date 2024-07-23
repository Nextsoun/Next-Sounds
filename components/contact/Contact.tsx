"use client";

import React, { useRef, FormEvent } from "react";
import { toast } from "sonner";
import { createContact } from "@/app/actions/contact.actions";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (formData: FormData): boolean => {
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !phone || !email || !message) {
      toast.warning("Todos los campos son obligatorios.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Por favor, ingrese un email válido.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (formData: FormData) => {
    if (!validateForm(formData)) {
      return;
    }

    try {
      const contactPromise = createContact(formData);
      toast.promise(contactPromise, {
        loading: "Enviando...",
        success: (data) => {
          if (data) {
            return `${data.name} tu solicitud fue enviada.`;
          } else {
            return "Solicitud enviada.";
          }
        },

        error: (err) => `Error: ${err.message}`,
      });

      await contactPromise;

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      handleSubmit(formData);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} noValidate>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Teléfono"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Dirección de Email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          id="message"
          placeholder="Mensaje"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Contact;
