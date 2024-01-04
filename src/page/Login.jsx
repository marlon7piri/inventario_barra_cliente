import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMiContext } from "../context/DataProvider";

const Login = () => {

  const navigate = useNavigate();
const {usuario,setUsuario} = useMiContext()

const LimpiarCampos =()=>{
    setUsuario({
        nombre:"",
        password:""
    });
}
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (usuario.nombre !== "" && usuario.password !== "") {
      navigate("/home");
     /*  LimpiarCampos() */
    } else {
      alert("No estas registrado");
      LimpiarCampos()
      return;
    }

  };
  return (
    <div className="w-1/4 m-auto">
      <h1 className="text-red-500 text-3xl font-bold text-center mb-8">
        Login
      </h1>

      <form
        onSubmit={handlerSubmit}
        className="flex flex-col gap-2 w-full m-auto"
      >
        <input
          type="text"
          placeholder="usuario"
          onChange={(e) => setUsuario({...usuario,nombre:e.target.value})}
          className="p-2 outline-none"
          value={usuario.nombre} autoComplete="false"
        />
        <input
          type="password"
          placeholder="contraseña"
          onChange={(e) => setUsuario({...usuario,password:e.target.value})}
          className="p-2 outline-none"
          value={usuario.password}
        />
        <input
          type="submit"
          value="Login"
          className="text-slate-50 hover:text-slate-50 bg-green-500 p-2 w-full rounded-md hover:bg-green-800 transition duration-500"
        />
      </form>
    </div>
  );
};

export default Login;
