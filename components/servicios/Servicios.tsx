import React from "react";

const Servicios = () => {
  return (
    <section className="m-auto p-4 pt-0">
      <div className="flex justify-center pb-6">
        <h2 className="text-2xl">Servicios</h2>
      </div>
      <div className="flex justify-center ">
        <span className="px-1 py-1 bg-[#c0604863] rounded-full"></span>
        <span className="px-6 py-1 bg-[#c06048] rounded-full mx-2" />
        <span className="px-1 py-1 bg-[#c0604894] rounded-full"></span>
      </div>
      <div className="lg:flex flex-col justify-center text-center gap-4 py-4 ">
        <div className="p-6">
          <h4 className="py-2">Mezcla</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, consequuntur aperiam porro officia dicta
          </p>
        </div>
        <div className="p-6">
          <h4 className="py-2">Master</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sit earum aperiam modi, dolorem quaerat
          </p>
        </div>
        <div className="p-6">
          <h4 className="py-2">Post-Produccion</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus eveniet laboriosam, dolorum
          </p>
        </div>
        <div className="p-6">
          <h4 className="py-2">Grabacion de voces</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias earum molestiae culpa eum illo</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
