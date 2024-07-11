import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const newContact = await prisma.contact.create({
    data,
  });
  console.log({ newContact });
  return NextResponse.json("guardando registro ...");
}
