import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login_Page, { Login } from "../pages/Login_Page";
import RoutesProtected from "./RoutesProtected";
import RedirectRoot from "./Redirect_Routes";

const Routess = ({ children }) => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <RoutesProtected>
            <Home />
          </RoutesProtected>
        }
      />
      <Route path="/" element={<RedirectRoot />} />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routess;
