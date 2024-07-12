"use client";
import { createContact } from "@/app/actions/contact.actions";
import React, { useRef } from "react";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (formData: FormData) => {
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

      // const contact = await contactPromise;

      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        if (formRef.current) {
          const formData = new FormData(formRef.current);
          handleSubmit(formData);
        }
      }}
      noValidate
    >
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
