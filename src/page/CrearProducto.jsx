import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useMiContext } from "../context/DataProvider";

const url = "https://inventario-barra-backend.vercel.app/api/productos";
const url2 = "http://localhost:3000/api/productos";

const CrearProducto = () => {
  const { setProductos, productos, getData,proveedores } = useMiContext();
  const [newproducto, setNewproducto] = useState({
    nombre: "",
    cantidad: "",
    unidad: "KG",
    area: "barra",
    proveedor:""
  });
  const [loading, setLoading] = useState(false);
  const params = useParams();


  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();

    const cantidadwithdecimal = Number(newproducto.cantidad);

    setNewproducto({
      ...newproducto,
      cantidad: cantidadwithdecimal,
    });

    try {
      setLoading(true);
      const res = await axios.post(url, newproducto);

      if (res.status == 200) {
        setProductos([...productos, res.data]);
        navigate("/productos");
        setLoading(false);
        toast.success("producto creado");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (params.id) {
      try {
        const getProductoPorId = async () => {
          const res = await axios.get(`${url}/${params.id}`);
          setNewproducto({
            nombre: res.data.nombre,
            cantidad: res.data.cantidad,
            unidad: res.data.unidad,
            area: res.data.area,
            proveedor: res.data.proveedor,
          });
        };
        getProductoPorId();
      } catch (error) {
        console.log(error);
      }
    }
  }, [params.id]);

  const updateProducto = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await axios.put(`${url}/${params.id}`, newproducto);
      if (res.status == 200) {
        getData();
        toast.success("producto actualizado");
        setLoading(false);
        setNewproducto({ nombre: "", cantidad: "", unidad: "", area: "",proveedor:"" });
        navigate("/productos");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Link
        to="/productos"
        className="mt-14 mb-8 w-max text-slate-50 hover:text-slate-50 bg-green-500 p-2  rounded-md hover:bg-green-800 transition duration-500"
      >
        Regresar
      </Link>
      <form
        onSubmit={params.id ? updateProducto : handlerSubmit}
        className="flex flex-col gap-2 w-full m-auto"
      >
        <legend className="text-red-500 text-3xl font-bold text-center mb-8">
          Crear Productos
        </legend>
        <input
          type="text"
          value={newproducto.nombre}
          onChange={(e) =>
            setNewproducto({ ...newproducto, nombre: e.target.value })
          }
          placeholder="nombre del producto.."
          className="p-2 outline-none"
        />
        <input
          type="text"
          pattern="^\d+(\.\d+)?$"
          value={newproducto.cantidad}
          onChange={(e) =>
            setNewproducto({ ...newproducto, cantidad: e.target.value })
          }
          placeholder="cantidad del producto.."
          className="p-2 outline-none"
        />
        <select
          name=""
          id=""
          value={newproducto.unidad}
          onChange={(e) =>
            setNewproducto({ ...newproducto, unidad: e.target.value })
          }
          className="p-2 outline-none cursor-pointer"
        >
          <option value="KG">KG</option>
          <option value="LT">LT</option>
          <option value="PQTE">PQTE</option>
          <option value="UNID">UNID</option>
        </select>
        <select
          name=""
          id=""
          value={newproducto.area}
          onChange={(e) =>
            setNewproducto({ ...newproducto, area: e.target.value })
          }
          className="p-2 outline-none cursor-pointer"
        >
          <option value="barra">barra</option>
          <option value="cocina">cocina</option>
        </select>
        <select
          name=""
          id=""
          value={newproducto.proveedor}
          onChange={(e) =>
            setNewproducto({ ...newproducto, proveedor: e.target.value })
          }
          className="p-2 outline-none cursor-pointer"
        >{proveedores?.map((e)=>{
          return  <option value={e}>{e.nombre}</option>
          
        })}
        </select>



        <input
          type="submit"
          value={!loading ? (params.id ? "editar" : "crear") : "loading..."}
          className="text-slate-50 hover:text-slate-50 bg-green-500 p-2 w-full rounded-md hover:bg-green-800 transition duration-500"
        />
      </form>
    </div>
  );
};

export default CrearProducto;
