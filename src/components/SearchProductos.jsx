import React, { useState } from "react";
import { useMiContext } from "../context/DataProvider";

const SearchProductos = () => {
  const {
    tipoinventario,
    setTipoinventario,
    filtrarPorArea,
    setTerminodebusqueda,
    filtrar,setLoading,loading
  } = useMiContext();

  const handlerChange = (e) => {
    setTerminodebusqueda(e.target.value);
    filtrar(e.target.value);

  };

  const manejarFiltradoPorArea = (e) => {
    setTipoinventario(e.target.value);
    filtrarPorArea(e.target.value);
  };
  return (
    <form className="flex gap-2 m-auto ">
      <input
        type="text"
        placeholder="buscar producto....."
        className="w-max p-2 outline-none mt-8"
        onChange={handlerChange}
      />
    {/*  { <select
        name=""
        id=""
        value={tipoinventario}
        onChange={manejarFiltradoPorArea}
        className="p-2 outline-none cursor-pointer"
      >
        <option value="barra">barra</option>
        <option value="cocina">cocina</option>
      </select>} */}
    </form>
  );
};

export default SearchProductos;
