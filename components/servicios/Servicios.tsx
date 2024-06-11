import React from "react";

const Servicios = () => {
  return (
    <section className="m-auto p-4 pt-0">
      <div className="flex justify-center pb-4">
        <h2 className="font-bold">Servicios</h2>
      </div>
      <div className="flex justify-center ">
        <span className="px-2 py-1 bg-yellow-600 rounded-full"></span>
        <hr className="px-8 py-1 bg-yellow-600 rounded-full mx-2" />
        <span className="px-2 py-1 bg-yellow-600 rounded-full"></span>
      </div>
      <div className="flex gap-4 py-4">
        <div>
          <h4 className="py-2">Mezcla</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, consequuntur aperiam porro officia dicta
          </p>
        </div>
        <div>
          <h4 className="py-2">Master</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis sit earum aperiam modi, dolorem quaerat
          </p>
        </div>
        <div>
          <h4 className="py-2">Post-Produccion</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus eveniet laboriosam, dolorum
          </p>
        </div>
        <div>
          <h4 className="py-2">Grabacion de voces</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias earum molestiae culpa eum illo</p>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
