import React from "react";
import { About, Servicios, Contact } from "@/components";
import { Roboto_Condensed, Cabin } from "next/font/google";

const roboto = Roboto_Condensed({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto items-center">
      <section
        className="relative bg-[url('/Consola.jpg')] bg-center bg-cover bg-opacity-10 h-full lg:min-h-screen flex lg:px-36 m-0"
        id="home"
      >
        <div className="absolute inset-0 lg:bg-gradient-to-r from-transparentto-black bg-opacity-10"></div>{" "}
        {/* Overlay oscuro */}
        <div className="lg:relative w-1/2"></div> {/* Mitad izquierda vacía */}
        <div className="lg:relative lg:w-1/2 flex flex-col items-start justify-center p-8 z-10">
          {/* Mitad derecha con el texto */}
          <h1 className="lg:text-6xl font-bold mb-4 text-white">Where Sound Comes To Life</h1>
          <h2 className="lg:text-4xl text-white">Let your music echo through the ages at Echo Chamber Studios</h2>
        </div>
      </section>

      <section>
        <About />
      </section>
      <section>
        <Servicios />
      </section>
      <section>
        <Contact />
      </section>
    </main>
  );
}
