import { PrismaClient } from "@prisma/client";

// Función para crear una nueva instancia de PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declarar globalThis con prismaGlobal para TypeScript
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

// Crear la instancia de PrismaClient
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// Asignar la instancia a globalThis.prismaGlobal solo en desarrollo
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export default prisma;
