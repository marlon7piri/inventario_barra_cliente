import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [usuario, setUsuario] = useState({
        nombre:'marlon',
        password:"",
        rol:"admin"
    })
    const [tipoinventario, setTipoinventario] = useState("barra")


  return (
    <DataContext.Provider value={{ usuario, setUsuario,tipoinventario,setTipoinventario }}>
      {children}
    </DataContext.Provider>
  );
};


export const useMiContext =()=>{
    return useContext(DataContext)
}
