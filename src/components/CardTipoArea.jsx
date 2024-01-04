import React from "react";
import { Link } from "react-router-dom";

const CardTipoArea = () => {

    const cocina = 'cocina'
    const barra = 'barra'
  return (
    <div className="w-full h-screen bg-slate-200">
      <div className="flex  lg:flex md:flex sm:flex-col gap-4 justify-center items-center">
        <Link to={`/productos/${cocina}`} className="bg-sky-500 w-[300px] h-[400px] rounded-md shadow-2xl hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
          <h1 className="text-2xl text-slate-900 font-black">Cocina</h1>
        </Link>
        <Link to={`/productos/${barra}`}className="bg-pink-500 w-[300px]  h-[400px] rounded-md shadow-2xl hover:scale-105 transition duration-500 cursor-pointer flex flex-col justify-center items-center">
          <h1 className="text-2xl text-slate-900 font-black">Barra</h1>
        </Link>
      </div>
    </div>
  );
};

export default CardTipoArea;
