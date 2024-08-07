import React from "react";
import Image from "next/image";
import { Roboto_Condensed, Cabin } from "next/font/google";
import Mixer from "@/components/servicios/Mixer";
import Music from "@/components/servicios/Music";
import Mic from "@/components/servicios/Mic";
import Soundwave from "@/components/servicios/Soundwave";
import Contact from "@/components/contact/Contact";

const roboto = Roboto_Condensed({ subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="mx-auto">
      <section
        className="relative bg-[url('/Consola.jpg')] fill-current bg-center bg-cover object-cover h-full pt-24 lg:pt-0 lg:min-h-screen flex items-center justify-center lg:justify-end lg:px-36 m-0"
        id="home"
      >
        <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-transparent lg:to-black/80 bg-gradient-to-r from-black/80 via-black/90 to-black/80"></div>
        <div className="relative w-full lg:w-1/2 flex flex-col items-start text-center justify-center p-8 z-10">
          <h1 className="text-2xl lg:text-6xl font-bold  text-white">Donde el sonido cobra vida</h1>
          <h2 className="text-lg lg:text-4xl text-white">
            Deja que tu música resuene a través de los tiempos en <b>Next Sounds</b> Studios
          </h2>
        </div>
      </section>

      <section className="bg-[#1B262C] lg:min-h-screen flex items-center justify-center p-2 lg:py-10 m-auto" id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:px-28 w-full">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <div className="flex flex-col lg:pt-10">
              <h1 className="text-2xl lg:text-4xl font-extrabold text-white">SOBRE NOSOTROS</h1>
              <span className="border-t-4 border-[#C06048] my-6 w-28" />
            </div>
          </div>
          <div className="order-3 lg:order-2 lg:row-start-2 lg:col-start-1 lg:col-end-2">
            <div className="flex flex-col lg:justify-start lg:text-lg text-white">
              <p>Bienvenido a Next Sounds Studios, donde la música y la creatividad fluyen libremente.</p>
              <br />
              <p>
                Nuestro estudio de última generación está diseñado para hacer realidad su visión musical, ya sea un
                profesional experimentado o una estrella en ascenso.
              </p>
              <br />
              <p>
                Con un equipo de ingenieros y productores experimentados, brindamos servicios personalizados que se
                adaptan a su sonido y estilo únicos.
              </p>
              <br />
              <p>
                Desde grabación y mezcla hasta masterización y postproducción, ofrecemos una gama completa de servicios
                que llevarán tu música al siguiente nivel.
              </p>
              <br />
              <p>
                Nuestro estudio está equipado con la última tecnología y equipos para garantizar la más alta calidad de
                sonido posible. En Next Sounds Studios, creemos que cada artista merece que se escuche su voz.
                Permítanos ayudarle a hacer realidad sus sueños musicales.
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
            <h2 className="text-4xl">SERVICIOS</h2>
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
            <h4 className="py-6 text-lg">Grabación y mezcla</h4>
            <p>Nuestro equipo de ingenieros y productores trabajará con usted para hacer realidad su visión musical.</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <Soundwave />
            <h4 className="py-6 text-lg">Masterización</h4>
            <p>Puliremos tus pistas y nos aseguraremos de que suenen lo mejor posible en cualquier plataforma.</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <Music />
            <h4 className="py-6 text-lg">Post-Producción</h4>
            <p>Desde la edición hasta el diseño de sonido, te ayudaremos a darle los toques finales a tu proyecto.</p>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <Mic />
            <h4 className="py-6 text-lg">Grabación de voz en off</h4>
            <p>
              ¿Necesitas grabar una voz en off para tu proyecto? Utilice nuestro estudio con equipos de primera línea.
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2397.4306059380187!2d-58.42306969082248!3d-34.570734462090684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59f11be0fdd%3A0x11c0e08ac98c6f65!2sAv.%20Infanta%20Isabel%20110%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1sen!2sus!4v1720484517047!5m2!1sen!2sus"
              className="w-full h-full border rounded-lg"
              loading="lazy"
            />
            <div className="justify-start">
              <ul className="p-2">
                <li className="text-white">Av. Infanta Isabel 110, Cdad. Autónoma de Buenos Aires, Argentina</li>
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
                    <span dir="ltr">+54-112-345678</span>
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
                    <span>nextsong24@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-8 w-full h-full bg-white rounded-lg shadow-md">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}
