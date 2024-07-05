import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center bg-[#1b262c] p-2 shadow-md z-50">
      <div className="flex items-center">
        <ul className="flex px-2">
          <li className="px-2">
            <a className="hover:outline-[#C06048]" href="#home">
              Inicio
            </a>
          </li>
          <li className="px-2">
            <a href="#about">Sobre Nosotros</a>
          </li>
        </ul>
      </div>
      <div>
        <Image src="/next_sound.png" alt="logo" width={40} height={40} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-2">
          <li className="px-2">
            <a href="#services">Servicios</a>
          </li>
          <li className="px-2">
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
