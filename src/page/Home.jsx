import React, { useEffect, useState } from "react";
import TablaProductos from "../components/TablaProductos";
import { Link } from "react-router-dom";
import SearchProductos from "../components/SearchProductos";
import axios from "axios";
import { useMiContext } from "../context/DataProvider";
import Conversion from "../components/Conversion";

const Home = () => {
  const { usuario,openConversion} = useMiContext();

 
  return (
    <div className=" w-full h-full">
      <h1 className="text-red-500 text-4xl font-bold text-center mb-8">
        Inventario de Barra
      </h1>
      <div className="flex gap-2 mb-8 ">
        {usuario?.nombre === "marlon" ? (
          <Link
            to="/crear"
            className="block     text-slate-50 hover:text-slate-50 bg-green-500 p-2 w-max rounded-md hover:bg-green-800 transition duration-500"
          >
            Crear Producto
          </Link>
        ) : (
          ""
        )}
         <button
           onClick={openConversion}
            className="block     text-slate-50 hover:text-slate-50 bg-green-500 p-2 w-max rounded-md hover:bg-green-800 transition duration-500"
          >
            Conversion
          </button>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <SearchProductos
         
        />
        <TablaProductos
          
        />
        <Conversion/>
      </div>
    </div>
  );
};

export default Home;
