import React from "react";
import { About, Servicios, Contact } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div>
        <About />
        <Servicios />
        <Contact />
      </div>
    </main>
  );
}
