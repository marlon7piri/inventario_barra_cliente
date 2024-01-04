import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DataContext = createContext();
const url = "https://inventario-barra-backend.vercel.app/api/productos";
const urlProveedores =
  "https://inventario-barra-backend.vercel.app/api/proveedores";
const urlProveedores2 = "http://localhost:3000/api/proveedores";
const url2 = "http://localhost:3000/api/productos";

export const DataProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    password: "",
    rol: "admin",
  });
  const [tipoinventario, setTipoinventario] = useState("barra");
  const [terminodebusqueda, setTerminodebusqueda] = useState("");
  const [proveedores, setProveedores] = useState([]);

  const [productos, setProductos] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultadoconversion, setResultadoconversion] = useState(0);
  const [cambiodepath, setCambiodepath] = useState(false);

  const params = useParams();
  const getData = async () => {
    setLoading(true);

    await axios.get(url).then((response) => {
      setProductos(response.data);
      setTablaProductos(response.data);

      setLoading(false);
    });

    await axios.get(urlProveedores).then((response) => {
      setProveedores(response.data);

      setLoading(false);
    });

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

 

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

  const openConversion = () => {
    document
      .querySelector(".contenedor_conversiones")
      .classList.toggle("show_contenedor_conversiones");
  };

  const closeConversion = () => {
    document
      .querySelector(".contenedor_conversiones")
      .classList.remove("show_contenedor_conversiones");
  };

  return (
    <DataContext.Provider
      value={{
        productos,
        setProductos,
        proveedores,
        setProveedores,
        loading,
        tablaProductos,
        setTablaProductos,
        setLoading,
        usuario,
        setUsuario,
        tipoinventario,
        setTipoinventario,
        terminodebusqueda,
        setTerminodebusqueda,
        filtrar,
        getData,
        openConversion,
        closeConversion,
        resultadoconversion,
        setResultadoconversion,
        cambiodepath,
        setCambiodepath,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useMiContext = () => {
  return useContext(DataContext);
};
