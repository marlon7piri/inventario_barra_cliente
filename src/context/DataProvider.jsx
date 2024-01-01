import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();
const url = "https://inventario-barra-backend.vercel.app/api/productos";
const url2 = "http://localhost:3000/api/productos";

export const DataProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({
    nombre: "marlon",
    password: "",
    rol: "admin",
  });
  const [tipoinventario, setTipoinventario] = useState("barra");
  const [terminodebusqueda, setTerminodebusqueda] = useState("");

  const [productos, setProductos] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [resultadoconversion, setResultadoconversion] = useState(0)

  const getProductos = async () => {
    setLoading(true);
    if (tipoinventario == "barra") {
      await axios.get(url2).then((response) => {
        setProductos(response.data);
        setTablaProductos(response.data);
      });
    } else {
      alert("obteniendo datos de cocina");
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
   

    getProductos();
    
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

  const openConversion =()=>{
    document.querySelector('.contenedor_conversiones').classList.toggle('show_contenedor_conversiones')
  }

  const closeConversion =()=>{
    document.querySelector('.contenedor_conversiones').classList.remove('show_contenedor_conversiones')
  }


  return (
    <DataContext.Provider
      value={{
        productos,
        setProductos,
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
        filtrar,getProductos,openConversion,closeConversion,resultadoconversion,setResultadoconversion
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useMiContext = () => {
  return useContext(DataContext);
};
