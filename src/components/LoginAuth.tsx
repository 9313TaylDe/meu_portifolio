import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = createContext();

const LoginAuth = ({ children }) => {
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");

  const [nome, setnome] = useState("");

  const [emailcad, setemailcad] = useState("");
  const [senhacad, setsenhacad] = useState("");
  const [nomecad, setnomecad] = useState("");

  const [logado, setlogado] = useState(false);
  const [loading, setloading] = useState(true);

  const navegar = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("auth") === "true";

    if (isAuth) {
      const saved = JSON.parse(localStorage.getItem("saved"));
      if (saved?.email) {
        setlogado(true);
        setemail(saved.email);
        setnome(saved.nome);
      }
    }

    setloading(false);
  }, []);

  // 🔐 LOGIN
  const Login = async () => {
    try {
      if (!email || !senha) {
        alert("Preencha todos os campos");
        return;
      }

      const response = await fetch(
        "https://backend-1-jdsc.onrender.com/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password: senha, // 🔥 CORREÇÃO AQUI
          }),
        }
      );

      const dados = await response.json();

      if (!response.ok) {
        alert(dados.error || "Dados incorretos");
        return;
      }

      setlogado(true);

      localStorage.setItem("auth", "true");
      localStorage.setItem(
        "saved",
        JSON.stringify({
          email: dados.user.email,
          nome: dados.user.nome,
        })
      );

      alert(`Bem vindo ${dados.user.nome}`);
      navegar("/home");
    } catch (err) {
      alert("Erro ao conectar com o servidor");
    }
  };

  // 📝 CADASTRO
  const newAccountt = async () => {
    if (!nomecad || !emailcad || !senhacad) {
      alert("Preencha todos os campos");
      return false;
    }

    try {
      const response = await fetch(
        "https://backend-1-jdsc.onrender.com/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: nomecad,
            email: emailcad,
            password: senhacad, // 🔥 CORREÇÃO
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Erro ao cadastrar");
        return false;
      }

      alert("Cadastrado com sucesso");

      setnomecad("");
      setemailcad("");
      setsenhacad("");

      return true;
    } catch (err) {
      alert("Erro ao conectar com o servidor");
      return false;
    }
  };

  // 🚪 LOGOUT
  const Logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("saved");

    setlogado(false);
    setemail("");
    setnome("");
    setsenha("");

    navegar("/login");
  };

  return (
    <useAuth.Provider
      value={{
        Login,
        Logout,
        newAccountt,
        email,
        setemail,
        senha,
        setsenha,
        nome,
        setnome,
        emailcad,
        setemailcad,
        senhacad,
        setsenhacad,
        nomecad,
        setnomecad,
        logado,
        loading,
      }}
    >
      {children}
    </useAuth.Provider>
  );
};

export default LoginAuth;
