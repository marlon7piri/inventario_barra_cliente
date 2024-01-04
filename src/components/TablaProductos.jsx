import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { useMiContext } from "../context/DataProvider";
import { VscEdit } from "react-icons/vsc";
import { MdDeleteForever } from "react-icons/md";

const url = "https://inventario-barra-backend.vercel.app";
const TablaProductos = () => {
  const { usuario, loading, setProductos,productos,tablaProductos } = useMiContext();

  const params = useParams()
  const filtrarPorArea = (area) => {
    const result = tablaProductos.filter((producto) => {
      return producto.area === area;
    });

    setProductos(result);
  };

  useEffect(()=>{
    filtrarPorArea(params.area)
  },[loading])
  if (loading) {
    return <Loading />;
  }
  const palindromo = (fecha) => {
    return fecha.split("-").reverse().join("-");
  };

  const eliminarProducto = async (id) => {
    const res = await axios.delete(`${url}/api/productos/${id}`);

    const productosfiltrados = productos.filter((e) => e.id !== res.data.id);
    toast.success("producto eliminado");
    setProductos(productosfiltrados);
  };

  if (productos.length == 0)
    return (
      <h1 className="text-red-500 text-3xl font-bold text-center mb-8">
        No hay productos
      </h1>
    );

  return (
    <table className="table w-[600px] m-auto font-thin">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Unidad</th>
          <th scope="col">Proveedor</th>
          {/* <th scope="col">Fecha de Creacion</th> */}
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        {productos?.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.nombre}</td>
              <td>{e.cantidad}</td>
              <td>{e.unidad}</td>
              <td>{e.proveedor}</td>
              {/*  <td>{palindromo(e.createdAt.substring(0, 10))}</td> */}
              <td className="flex gap-2">
                <Link
                  to={`/crear/${e.id}`}
                  className="bg-sky-500 transition duration-500  hover:bg-sky-700 hover:text-slate-50   font-medium p-2 rounded-md w-max"
                >
                  <VscEdit className="text-slate-50" />
                </Link>
                {usuario?.nombre === "marlon" &&
                usuario.password === "marlon7piri" ? (
                  <button
                    className="bg-red-500 transition duration-500  hover:bg-red-700 hover:text-gray-50   font-medium p-2 rounded-md w-max"
                    onClick={() => eliminarProducto(e.id)}
                  >
                    <MdDeleteForever className="text-slate-50" />
                  </button>
                ) : (
                  ""
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TablaProductos;
