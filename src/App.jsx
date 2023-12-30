import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Toaster} from 'react-hot-toast'

import Rutas from "./components/Rutas";

function App() {

  return (
    <div>
      <Rutas/>
     <Toaster/>
    </div>
  );
}

export default App;
