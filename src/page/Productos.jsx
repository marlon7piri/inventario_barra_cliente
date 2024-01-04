import React, { useEffect } from "react";
import { useMiContext } from "../context/DataProvider";
import Conversion from "../components/Conversion";
import TablaProductos from "../components/TablaProductos";
import SearchProductos from "../components/SearchProductos";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const url = "https://inventario-barra-backend.vercel.app/api/productos";
const urlProveedores =
  "https://inventario-barra-backend.vercel.app/api/proveedores";
const urlProveedores2 = "http://localhost:3000/api/proveedores";
const url2 = "http://localhost:3000/api/productos";

const Productos = () => {
  const {
    cambiodepath,
    usuario,
    openConversion,
    setProductos,
    productos,
    tablaProductos,
  } = useMiContext();
 /*  const params = useParams();

  const filtrarPorArea = (area) => {
    const result = tablaProductos.filter((producto) => {
      return producto.area === area;
    });
return result
   
  };

  useEffect(() => {
    const result = filtrarPorArea(params.area);
    setProductos(result);
  }, [cambiodepath]); */

  return (
    <>
      <div className="flex gap-2  m-auto mb-8">
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
        <div className="m-auto flex gap-4">
          <button
            onClick={openConversion}
            className="block     text-slate-50 hover:text-slate-50 bg-green-500 p-2 w-max rounded-md hover:bg-green-800 transition duration-500"
          >
            Conversion
          </button>
          <Link
            to="/home"
            className="block     text-slate-50 hover:text-slate-50 bg-green-500 p-2 w-max rounded-md hover:bg-green-800 transition duration-500"
          >
            Regresar
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4">
        <SearchProductos />
        <TablaProductos/>
        <Conversion />
      </div>{" "}
    </>
  );
};

export default Productos;
