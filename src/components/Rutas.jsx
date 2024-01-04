import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import CrearProducto from "../page/CrearProducto";
import Login from "../page/Login";
import Productos from "../page/Productos";

export default function Rutas() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/productos/:area" element={<Productos />} />

      <Route exact path="/crear/:id" element={<CrearProducto />} />
      <Route exact path="/crear" element={<CrearProducto />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}
