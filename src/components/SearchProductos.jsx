import React, { useState } from "react";
import { useMiContext } from "../context/DataProvider";

const SearchProductos = ({ tablaProductos, setProductos }) => {
  const { tipoinventario, setTipoinventario,terminodebusqueda,setTerminodebusqueda ,filtrar} = useMiContext();

 

  const handlerChange = (e) => {
    setTerminodebusqueda(e.target.value);
    filtrar(e.target.value);
  };
  return (
    <form className="flex gap-2">
      <input
        type="text"
        placeholder="buscar producto....."
        className="w-max p-2 outline-none"
        onChange={handlerChange}
      />
      <select
        name=""
        id=""
        value={tipoinventario}
        onChange={(e) => setTipoinventario(e.target.value)}
        className="p-2 outline-none cursor-pointer"
      >
        <option value="barra">barra</option>
        <option value="cocina">cocina</option>
      </select>
    </form>
  );
};

export default SearchProductos;
