import { createContext, useState } from "react";
export const useAuth = createContext();
const LoginAuth = ({ children }) => {
  const [logado, setlogado] = useState(false);
  const [user, setuser] = useState(() => {
    const saved = localStorage.getItem("saved");
    return saved ? JSON.stringify(saved) : [];
    if (saved) {
      localStorage.setItem("saved");
    }
  });

  const Login = (email, senha) => {
    if (!email || !senha) {
      alert("Preencha todos os campos");
    }

    if (email && senha) {
      setlogado(true);
      localStorage.setItem("saved", "true");
      alert("Logado com sucesso");
    }
  };
  return (
    <useAuth.Provider value={{ Login, logado, setlogado, user, setuser }}>
      {children}
    </useAuth.Provider>
  );
};

export default LoginAuth;
