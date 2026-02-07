import { createContext, useEffect, useState } from "react";
import { replace, useNavigate } from "react-router-dom";
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

  console.log(email, senha, nome);

  const Login = async () => {
    try {
      if (!email || !senha) {
        alert("Preencha todos os campos");
        return;
      }

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const dados = await response.json();

      if (dados.success) {
        setlogado(true);

        localStorage.setItem("auth", "true");
        localStorage.setItem(
          "saved",
          JSON.stringify({
            email: dados.email,
            nome: dados.nome,
          })
        );

        alert(`Bem vindo Sr ${dados.nome}`);
        navegar("/home");
      } else {
        alert("Dados incorretos");
      }
    } catch (err) {
      alert("Erro ao conectar com o servidor");
    }
  };

  const newAccountt = async () => {
    if (!nomecad || !emailcad || !senhacad) {
      alert("Preencha todos os campos");
      return false;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/new`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomecad,
          email: emailcad,
          senha: senhacad,
        }),
      });

      if (response.ok) {
        alert("Cadastrado com sucesso");

        // limpa campos de cadastro
        setnomecad("");
        setemailcad("");
        setsenhacad("");

        return true; // 🔥 ESSENCIAL
      } else {
        const res = await response.json();
        alert(res.message || "Erro ao cadastrar");
        return false;
      }
    } catch (err) {
      alert("Erro ao conectar com o servidor");
      return false;
    }
  };

  const Logout = () => {
    localStorage.removeItem("auth");
    setlogado(false);
    alert("Deslogado com sucesso");
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
        setlogado,
        loading,
        setloading,
      }}
    >
      {children}
    </useAuth.Provider>
  );
};

export default LoginAuth;
