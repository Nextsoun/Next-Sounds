import React from "react";
import Image from "next/image";
import { Servicios, Contact } from "@/components";
import { Roboto_Condensed, Cabin } from "next/font/google";

const roboto = Roboto_Condensed({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto items-center">
      <section
        className="relative bg-[url('/Consola.jpg')] bg-center bg-cover object-cover opacity-1 h-full lg:min-h-screen flex lg:justify-end lg:px-36 m-0"
        id="home"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black"></div>
        {/* Overlay oscuro */}

        <div className="relative w-full lg:w-1/2 flex flex-col items-start text-center justify-center p-8 z-10">
          {/* Mitad derecha con el texto */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">Where Sound Comes To Life</h1>
          <h2 className="text-2xl lg:text-4xl text-white">
            Let your music echo through the ages at Echo Chamber Studios
          </h2>
        </div>
      </section>

      <section className="bg-[#1B262C] flex py-10 px-2 lg:py-24">
        <div className="flex flex-col-reverse justify-center lg:grid lg:grid-cols-2 lg:gap-2 lg:px-24 ">
          <div className=" text-center py-4">
            <h1 className="text-2xl lg:text-4xl font-extrabold text-white">ABOUT US</h1>
            <hr className="border-t-4 border-[#C06048] my-6 w-28 mx-auto lg:mx-0" />

            <p className="text-md">Welcome to Echo Chamber Studios, where music and creativity flow freely.</p>
            <br />
            <p>
              Our state-of-the-art studio is designed to bring your musical vision to life, whether a seasoned
              professional or a rising star.
            </p>
            <br />
            <p>
              With a team of experienced engineers and producers, we provide personalized services that cater to your
              unique sound and style.
            </p>
            <br />
            <p>
              From recording and mixing to mastering and post-production, we offer a full range of services that will
              take your music to the next level.
            </p>
            <br />
            <p>
              Our studio is equipped with the latest technology and equipment to ensure the highest quality sound
              possible. At Echo Chamber Studios, we believe that every artist deserves to have their voice heard. Let us
              help you make your musical dreams a reality.
            </p>
          </div>
          <div>
            <Image src="/AboutUs.webp" alt="Recording" height={1000} width={1000} />
          </div>
        </div>
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
