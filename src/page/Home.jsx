import React, { useEffect, useState } from "react";
import TablaProductos from "../components/TablaProductos";
import { Link } from "react-router-dom";
import SearchProductos from "../components/SearchProductos";
import axios from "axios";
import { useMiContext } from "../context/DataProvider";


const url = "https://inventario-barra-backend.vercel.app/api/productos"
const Home = () => {
  const [productos, setProductos] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([])
  const [loading, setLoading] = useState(false);
  const {usuario} = useMiContext()

  useEffect(() => {
    const getProductos = async () => {
      setLoading(true);
      await axios.get(url)
        .then((response) => {
          setProductos(response.data);
          setTablaProductos(response.data)
        });
    };

    getProductos();
    setLoading(false);
  }, [productos]);
  return (
    <>
      <h1 className="text-red-500 text-4xl font-bold text-center mb-8">
        Inventario de Barra
      </h1>
      { usuario?.nombre === 'marlon' ? <Link
        to="/crear"
        className="block mb-8 m-auto   text-slate-50 hover:text-slate-50 bg-green-500 p-2 w-max rounded-md hover:bg-green-800 transition duration-500"
      >
        Crear Producto
      </Link>:""}
      <div className="flex flex-col justify-center gap-4">
        <SearchProductos  tablaProductos={tablaProductos} setProductos={setProductos} />
        <TablaProductos
          productos={tablaProductos}
          setProductos={setProductos}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </>
  );
};

export default Home;
