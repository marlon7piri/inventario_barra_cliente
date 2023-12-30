import React from "react";
import {Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import CrearProducto from "../page/CrearProducto";

export default function Rutas() {
  return (
    <Routes>
      <Route  exact path="/" element={<Home />} />
     
      <Route exact path="/crear/:id" element={<CrearProducto/>} />
      <Route exact path="/crear" element={<CrearProducto/>} />
    </Routes>
  );
}