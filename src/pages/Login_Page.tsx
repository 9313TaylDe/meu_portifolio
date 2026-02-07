import { useContext, useState } from "react";
import { useAuth } from "../components/LoginAuth";

const Login_Page = ({ classname, frente, verso, rotate, setrotate }) => {
  return (
    <div
      className={`bg-[#d9d9d9] flex items-center justify-center flex-col [perspective:700px] ${classname}`}
    >
      <div
        className={`relative w-[300px] h-[60%] bg-white rounded-3xl shadow shadow-black
        transition-transform duration-[1.5s] flex justify-center p-4
        [transform-style:preserve-3d]
        ${rotate ? "[transform:rotateY(180deg)]" : ""}`}
      >
        <div className="absolute w-full flex [backface-visibility:hidden]">
          {frente}
          <button
            className="z-50 absolute right-4 top-6 hover:text-gray-500 pi pi-refresh"
            onClick={() => setrotate(!rotate)}
          ></button>
        </div>

        <div className="absolute w-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <button
            className="z-50 pi pi-refresh absolute right-4 top-6 hover:text-gray-500 rotate-180"
            onClick={() => setrotate(!rotate)}
          ></button>
          {verso}
        </div>
      </div>
    </div>
  );
};

export const Login = () => {
  const [rotate, setrotate] = useState(false);

  const {
    Login,
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
    Logout,
    logado,
    setlogado,
  } = useContext(useAuth);
  return (
    <Login_Page
      rotate={rotate}
      setrotate={setrotate}
      classname=" w-full items-center justify-center min-h-[100vh] flex p-4 "
      frente={
        <div className="w-[100%] flex gap-4 flex-col items-center justify-center rounded-3xl p-4">
          <h2 className="w-full pl-1">LOGAR</h2>
          <div className="w-full flex flex-col bg-transparent gap-1 p items-center justify-center">
            <input
              type="text"
              placeholder="Usuario"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="placeholder:text-black pl-1 w-full border-none leading-none outline-none bg-gray-400"
            />
            <input
              type="text"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setsenha(e.target.value)}
              className="placeholder:text-black pl-1 w-full border-none leading-none outline-none bg-gray-400"
            />
            <button onClick={() => Login()} className="">
              Entrar
            </button>
          </div>
        </div>
      }
      verso={
        <div className="w-[100%] flex gap-4 flex-col items-center justify-center rounded-3xl p-4">
          <h2 className="w-full pl-1">CADASTRAR</h2>
          <div className="w-full flex flex-col bg-transparent gap-1 items-center justify-center">
            <input
              type="text"
              placeholder="Nome"
              value={nomecad}
              onChange={(e) => setnomecad(e.target.value)}
              className="placeholder:text-black pl-1 w-full border-none leading-none outline-none bg-gray-400"
            />
            <input
              type="text"
              placeholder="Usuario"
              value={emailcad}
              onChange={(e) => setemailcad(e.target.value)}
              className="placeholder:text-black pl-1 w-full border-none leading-none outline-none bg-gray-400"
            />
            <input
              type="text"
              placeholder="Senha"
              value={senhacad}
              onChange={(e) => setsenhacad(e.target.value)}
              className="placeholder:text-black pl-1 w-full border-none leading-none outline-none bg-gray-400"
            />
            <button
              onClick={async () => {
                const ok = await newAccountt();
                if (ok) setrotate(false);
              }}
              className=""
            >
              Cadastrar
            </button>
          </div>
        </div>
      }
    />
  );
};
export default Login_Page;
