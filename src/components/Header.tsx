import { useState } from "react";
import "primeicons/primeicons.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex relative w-full h-[50px] bg-white md:bg-white transition-all">
      {/* MENU DESKTOP */}
      <ul className="hidden md:flex w-full gap-5 justify-center items-center">
        {["Home", "Sobre", "Contato", "Projetos"].map((item) => (
          <li
            key={item}
            className="px-4 py-1 text-[14px] rounded-md border border-black cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* MENU MOBILE */}
      <nav className="md:hidden w-full">
        <button
          onClick={() => setOpen(!open)}
          className="absolute left-2 top-2 z-50 w-8 h-8 flex items-center justify-center"
        >
          <i
            className={`pi pi-bars absolute text-xl transition-all duration-300 ${
              open ? "opacity-0 rotate-90 scale-75" : "opacity-100"
            }`}
          />
          <i
            className={`pi pi-times absolute text-xl transition-all duration-300 ${
              open ? "opacity-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>

        <ul
          className={`flex flex-col bg-purple-700 text-white w-full p-4 gap-3 absolute top-[50px] transition-all duration-300 ${
            open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          <li>HOME</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
