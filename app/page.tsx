import React from "react";
import Image from "next/image";
import { Roboto_Condensed, Cabin } from "next/font/google";
import Mixer from "@/components/servicios/Mixer";
import Music from "@/components/servicios/Music";
import Mic from "@/components/servicios/Mic";
import Soundwave from "@/components/servicios/Soundwave";

const roboto = Roboto_Condensed({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto items-center">
      <section
        className="relative  bg-[url('/Consola.jpg')] fill-current bg-center bg-cover object-cover  h-auto flex lg:justify-end lg:px-36 m-0"
        id="home"
      >
        <div className="lg:absolute lg:inset-0  lg:bg-gradient-to-r lg:from-transparent lg:to-black"></div>
       

        <div className="relative w-full lg:w-1/2 flex flex-col items-start text-center justify-center p-8 z-10">
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">Where Sound Comes To Life</h1>
          <h2 className="text-2xl lg:text-4xl text-white">
            Let your music echo through the ages at Echo Chamber Studios
          </h2>
        </div>
      </section>

      <section className="bg-[#1B262C] flex py-10 px-2 lg:py-24">
        <div className="flex flex-col-reverse justify-center lg:grid lg:grid-cols-2 lg:gap-6 lg:px-24 ">
          <div className="flex flex-col py-4 lg:text-md text-sm">
            <h1 className="text-2xl lg:text-4xl font-extrabold text-white">ABOUT US</h1>
            <span className="border-t-4 border-[#C06048] my-6 w-28 lg:mx-auto" />

            <p>Welcome to Echo Chamber Studios, where music and creativity flow freely.</p>
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
      <section className="m-auto p-4 pt-0">
        <div className="flex justify-center pb-6">
          <h2 className="text-2xl">Servicios</h2>
        </div>
        <div className="flex justify-center ">
          <span className="px-1 py-1 bg-[#c0604863] rounded-full"></span>
          <span className="px-6 py-1 bg-[#c06048] rounded-full mx-2" />
          <span className="px-1 py-1 bg-[#c0604863] rounded-full"></span>
        </div>
        <div className="lg:grid lg:grid-cols-4 lg:gap-4 lg:justify-center text-center gap-4 py-4 ">
          <div className="p-6 flex flex-col items-center justify-center">
            <h4 className="py-2">Mezcla</h4>
            <Mixer />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, consequuntur aperiam porro officia
              dicta
            </p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <h4 className="py-2">Master</h4>
            <Music />

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sit earum aperiam modi, dolorem
              quaerat
            </p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <h4 className="py-2">Post-Produccion</h4>
            <Soundwave />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus eveniet laboriosam,
              dolorum
            </p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <h4 className="py-2">Grabacion de voces</h4>
            <Mic />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias earum molestiae culpa eum illo
            </p>
          </div>
        </div>
      </section>
      <section>
        <h4>Contact</h4>
      </section>
    </main>
  );
}
