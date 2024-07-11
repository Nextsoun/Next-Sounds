import prisma from "@/app/utils/prisma.utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      const newContact = await prisma.contact.create({
        data,
      });
      console.log({ newContact });

      return res.status(200).json({ message: "Registro guardado correctamente." });
    } catch (error) {
      console.error("Error al guardar el registro:", error);
      return res.status(500).json({ error: "Ocurrió un error al guardar el registro." });
    }
  } else {
    return res.status(405).json({ error: "Método no permitido" });
  }
}
