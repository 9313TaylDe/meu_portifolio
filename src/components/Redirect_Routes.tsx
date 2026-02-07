import { useContext } from "react";
import { useAuth } from "./LoginAuth";
import { Navigate } from "react-router-dom";
const RedirectRoot = () => {
  const { logado, loading } = useContext(useAuth);
  if (loading) return null;
  return <Navigate to={logado ? "/home" : "/login"} replace />;
};
export default RedirectRoot;
