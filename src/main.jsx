import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter ,HashRouter} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { DataProvider } from "./context/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <HashRouter>
      <App />
      <Toaster />
    </HashRouter>
  </DataProvider>
);
