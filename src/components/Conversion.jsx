import React, { useState } from "react";
import { useMiContext } from "../context/DataProvider";

const Conversion = () => {
  const { closeConversion, resultadoconversion ,setResultadoconversion} = useMiContext();
  const [numero, setNumero] = useState("");

  const convertir = () => {
    const result = Number(numero / 2.2);
    setResultadoconversion(result.toFixed(3));
  };


  return (
    <div className="contenedor_conversiones ">
      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-slate-50 text-2xl font-bold  ">
          Calculadora <br></br>de Conversiones
        </h1>

        <button
          className="bg-red-500 px-3 py-2 rounded-md text-slate-50 hover:bg-red-800 transition duration-500"
          onClick={closeConversion}
        >
          X
        </button>
      </div>

      <div className="flex flex-col gap-2 w-2/4 m-auto">
        <input
          type="text"
          value={numero}
          placeholder="valor a convertir..."
          className="p-2 outline-none"
          onChange={(e)=>setNumero(e.target.value)}
        />
        <input
          type="text"
          placeholder=""
          value={resultadoconversion + " kg"}
          className="bg-slate-200 p-2 outline-none"
          disabled
        />
        <button
          onClick={convertir}
          className="text-slate-50 hover:text-slate-50 bg-red-500 p-2 w-full rounded-md hover:bg-red-800 transition duration-500"
        >
          Convertir
        </button>
      </div>
    </div>
  );
};

export default Conversion;
