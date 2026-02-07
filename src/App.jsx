import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login_Page from "./pages/Login_Page";
import { useAuth } from "./components/LoginAuth";
import Routess from "./components/Routes";
function App() {
  const { Login, Logout, logado, setlogado, user, setuser } =
    useContext(useAuth);
  const [senha, setsenha] = useState("");
  const [email, setemail] = useState("");
  return (
    <div className="flex  w-full h-full bg-[#D9D9D9]">
      <Routess />
    </div>
  );
}

export default App;
