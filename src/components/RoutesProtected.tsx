import { Navigate } from "react-router-dom";
import { useAuth } from "./LoginAuth";
import { useContext } from "react";

const RoutesProtected = ({ children }) => {
  const { logado, loading } = useContext(useAuth);
  if (loading) return null;
  return logado ? children : <Navigate to="/login" replace />;
};

export default RoutesProtected;
