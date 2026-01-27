import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginAuth from "./components/LoginAuth.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginAuth>
      <App />
    </LoginAuth>
  </StrictMode>
);
