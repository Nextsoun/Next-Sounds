import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex justify-center bg-[#C06048] bg-opacity-30 p-2 rounded">
      <div className="flex items-center">
        <ul className="flex px-2">
          <li className="px-2">Inicio</li>
          <li className="px-2">Sobre Nosotros</li>
        </ul>
      </div>
      <div>
        <Image src="/next_sound.png" alt="logo" width={40} height={40} />
      </div>
      <div className="flex items-center">
        <ul className="flex px-2">
          <li className="px-2">Servicios</li>
          <li className="px-2">Contacto</li>
        </ul>
      </div>
    </nav>
  );
};
