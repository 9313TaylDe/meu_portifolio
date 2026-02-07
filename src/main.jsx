import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginAuth from "./components/LoginAuth.js";
import { BrowserRouter } from "react-router-dom";
import Routess from "./components/Routes.js";
import RoutesProtected from "./components/RoutesProtected.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoginAuth>
        <App />
      </LoginAuth>
    </BrowserRouter>
  </StrictMode>
);
