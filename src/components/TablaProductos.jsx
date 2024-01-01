import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useMiContext } from "../context/DataProvider";

const url = "https://inventario-barra-backend.vercel.app";
const TablaProductos = ({ productos, setProductos, loading }) => {
  const { usuario } = useMiContext();

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

  return (
    <table className="table w-[600px] m-auto font-thin">
      <thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Unidad</th>
          <th scope="col">Cantidad</th>
          {/* <th scope="col">Fecha de Creacion</th> */}
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        {productos?.map((e) => {
          return (
            <tr key={e.id}>
              <td>{e.nombre}</td>
              <td>{e.unidad}</td>
              <td>{e.cantidad}</td>
              {/*  <td>{palindromo(e.createdAt.substring(0, 10))}</td> */}
              <td className="flex gap-2">
                <Link
                  to={`/crear/${e.id}`}
                  className="bg-sky-500 transition duration-500  hover:bg-sky-700 hover:text-slate-50   font-medium p-2 rounded-md w-max"
                >
                  editar
                </Link>
                {usuario?.rol ==='admin' ? (
                  <button
                    className="bg-red-500 transition duration-500  hover:bg-red-700 hover:text-gray-50   font-medium p-2 rounded-md w-max"
                    onClick={() => eliminarProducto(e.id)}
                  >
                    eliminar
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
