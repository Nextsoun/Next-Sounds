import React from "react";
import Image from "next/image";
import { Roboto_Condensed, Cabin } from "next/font/google";
import Mixer from "@/components/servicios/Mixer";
import Music from "@/components/servicios/Music";
import Mic from "@/components/servicios/Mic";
import Soundwave from "@/components/servicios/Soundwave";
import { createContact } from "./actions/contact.actions";

const roboto = Roboto_Condensed({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto">
      <section
        className="relative bg-[url('/Consola.jpg')] fill-current bg-center bg-cover object-cover h-full pt-24 lg:pt-0 lg:min-h-screen flex items-center justify-center lg:justify-end lg:px-36 m-0"
        id="home"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
        <div className="relative w-full lg:w-1/2 flex flex-col items-start text-center justify-center p-8 z-10">
          <h1 className="text-2xl lg:text-6xl font-bold  text-white">Where Sound Comes To Life</h1>
          <h2 className="text-lg lg:text-4xl text-white">
            Let your music echo through the ages at Echo Chamber Studios
          </h2>
        </div>
      </section>

      <section className="bg-[#1B262C] lg:min-h-screen flex items-center justify-center p-2 lg:py-10 m-auto" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:px-28 w-full">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <div className="flex flex-col lg:pt-10">
              <h1 className="text-2xl lg:text-4xl font-extrabold text-white">ABOUT US</h1>
              <span className="border-t-4 border-[#C06048] my-6 w-28" />
            </div>
          </div>
          <div className="order-3 lg:order-2 lg:row-start-2 lg:col-start-1 lg:col-end-2">
            <div className="flex flex-col lg:justify-start lg:text-lg text-white">
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
                possible. At Echo Chamber Studios, we believe that every artist deserves to have their voice heard. Let
                us help you make your musical dreams a reality.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-3 lg:row-start-2 lg:col-start-2 lg:col-end-3">
            <Image src="/AboutUs.webp" alt="Recording" height={1000} width={1000} />
          </div>
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center p-2" id="services">
        <div className="p-4">
          <div>
            <h2 className="text-4xl">Servicios</h2>
          </div>
          <div className="flex justify-center py-10">
            <span className="px-1 py-1 bg-[#c0604863] rounded-full"></span>
            <span className="px-6 py-1 bg-[#C06048] rounded-full mx-2" />
            <span className="px-1 py-1 bg-[#c0604863] rounded-full"></span>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 lg:justify-center text-center gap-4 ">
          <div className="p-6 flex flex-col items-center justify-center">
            <Mixer />
            <h4 className="py-6 text-lg">Mezcla</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, consequuntur aperiam porro officia
              dicta
            </p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <Music />
            <h4 className="py-6 text-lg">Master</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sit earum aperiam modi, dolorem
              quaerat
            </p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <Soundwave />
            <h4 className="py-6 text-lg">Post-Produccion</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus eveniet laboriosam,
              dolorum
            </p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <Mic />
            <h4 className="py-6 text-lg">Grabacion de voces</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias earum molestiae culpa eum illo
            </p>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col justify-center items-center min-h-screen bg-[#1b262c] text-black p-4"
        id="contact"
      >
        <div className="flex flex-col py-4 justify-center items-center">
          <h2 className="text-4xl text-white">Contacto</h2>
          <div className="flex justify-center p-4 ">
            <span className="px-1 py-1 bg-[#c0604863] rounded-full"></span>
            <span className="px-6 py-1 bg-[#C06048] rounded-full mx-2" />
            <span className="px-1 py-1 bg-[#c0604863] rounded-full"></span>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-4 w-full h-full flex flex-col items-center justify-center">
          <div className="flex flex-col w-full h-full justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167125041007!2d-58.3815704!3d-34.603738899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1719841920723!5m2!1ses-419!2sar"
              className="w-full h-full border rounded-lg"
              loading="lazy"
            />
            <div className="justify-start">
              <ul className="p-2">
                <li className="text-white">Manhattan, New York, NY, United States</li>
              </ul>
              <ul className="text-[#9b5b48]">
                <li>
                  <a href="tel:+1-985-245-1730" className="flex items-center space-x-2">
                    <i
                      className="w-6 h-6 bg-current"
                      style={{
                        mask: "url('https://images.cdn-files-a.com/ready_uploads/svg/phone.svg?v=2')",
                        WebkitMask: "url('https://images.cdn-files-a.com/ready_uploads/svg/phone.svg?v=2')",
                      }}
                      aria-label="fa fa-phone"
                    >
                      &nbsp;
                    </i>
                    <span dir="ltr">+1-985-245-1730</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:example@example.com" className="flex items-center space-x-2">
                    <i
                      className="w-6 h-6 bg-current"
                      style={{
                        mask: "url('https://images.cdn-files-a.com/ready_uploads/svg/envelope-o.svg?v=2')",
                        WebkitMask: "url('https://images.cdn-files-a.com/ready_uploads/svg/envelope-o.svg?v=2')",
                      }}
                      aria-label="envelope-o"
                    >
                      &nbsp;
                    </i>
                    <span>example@example.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form action={createContact} className="p-8 w-full h-full bg-white rounded-lg shadow-md">
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
        </div>
      </section>
    </main>
  );
}
