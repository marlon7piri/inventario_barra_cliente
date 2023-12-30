import React, { useState } from "react";

const SearchProductos = ({ tablaProductos, setProductos }) => {
  const [terminodebusqueda, setTerminodebusqueda] = useState("");

  const filtrar = (terminodebusqueda) => {
    const result = tablaProductos.filter((producto) => {
      if (
        producto.nombre
          .toString()
          .toLowerCase()
          .includes(terminodebusqueda.toLowerCase())
      ) {
        return producto;
      }
    });

    setProductos(result);
  };

  const handlerChange = (e) => {
    setTerminodebusqueda(e.target.value);
    filtrar(e.target.value);
  };
  return (
    <input
      type="text"
      placeholder="buscar producto....."
      className="w-max p-2 outline-none"
      onChange={handlerChange}
    />
  );
};

export default SearchProductos;
