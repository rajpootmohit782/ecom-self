import React from "react";
import ReactDOM from "react-dom/client";
import { Context } from "./components/Context";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

//bootstrap

//import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Cart from "./components/Cart";
import { AuthContextProvider } from "./components/store/auth-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </AuthContextProvider>
);
