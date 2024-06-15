import React from "react";
import { HomeComponent, About, Servicios, Contact } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div>
        <HomeComponent />
        <About />
        <Servicios />
        <Contact />
      </div>
    </main>
  );
}
