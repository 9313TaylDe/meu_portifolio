import { useContext, useState } from "react";
import "primeicons/primeicons.css";
import { useAuth } from "./LoginAuth";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { Logout } = useContext(useAuth);

  return (
    <header className="flex w-full h-[50px]  bg-white md:bg-white transition-all">
      {/* MENU DESKTOP */}
      <ul className="hidden md:flex fixed top-0 bg-white w-full h-[15vh] z-50 gap-5 justify-center items-center">
        {["Home", "Sobre", "Contato", "Projetos"].map((item) => (
          <li
            key={item}
            className="px-4 py-1 text-[14px] sm:text-[20px]  cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* MENU MOBILE */}
      <nav className={`md:hidden inset-0  fixed ${open && "z-50"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="fixed left-3  top-0 z-50 w-8 h-8 flex items-center justify-center"
        >
          <i
            className={`pi pi-bars text-black absolute text-xl transition-all duration-300 ${
              open ? "opacity-0 rotate-90 scale-75" : "opacity-100"
            }`}
          />
          <i
            className={`pi pi-times text-black absolute text-xl transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>

        <ul
          className={`flex flex-col bg-gray-500 cursor-pointer  h-screen text-black w-full p-4 pt-9 gap-3 absolute top-[50px] transition-all duration-300 ${
            open ? "-translate-y-14 opacity-100 " : "translate-y-4 opacity-0"
          }`}
        >
          <li
            className="hover:bg-white opacity-40 text-black font-bold p-0.5 rounded-sm flex items-center gap-2"
            onClick={() => Logout()}
          >
            <i className="pi pi-sign-out"></i>
            SAIR
          </li>

          <li className="hover:bg-white opacity-40 text-black font-bold p-0.5 rounded-sm flex items-center gap-2">
            <i className="pi pi-home"></i>
            HOME
          </li>

          <li className="hover:bg-white opacity-40 text-black font-bold p-0.5 rounded-sm flex items-center gap-2">
            <i className="pi pi-info-circle"></i>
            SOBRE
          </li>

          <li className="hover:bg-white opacity-40 text-black font-bold p-0.5 rounded-sm flex items-center gap-2">
            <i className="pi pi-phone"></i>
            CONTATO
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
