import React from "react";

const HomeComponent = () => {
  return (
    <div className="relative bg-[url('/Consola.jpg')] bg-cover bg-center min-h-screen flex md:px-36 mb-0">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay oscuro */}
      <div className="relative w-1/2"></div> {/* Mitad izquierda vacía */}
      <div className="relative w-1/2 flex flex-col items-start justify-center p-8 z-10">
        {" "}
        {/* Mitad derecha con el texto */}
        <h1 className="text-8xl font-bold mb-4 text-white">Where Sound Comes To Life</h1>
        <h2 className="text-4xl text-white">Let your music echo through the ages at Echo Chamber Studios</h2>
      </div>
    </div>
  );
};

export default HomeComponent;
