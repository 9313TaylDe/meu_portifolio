import foto from "../assets/foto.png";

const My_Infos = () => {
  return (
    <div className="w-full flex md:flex-row p-4 gap-6 items-center sm:flex-col-reverse flex-col-reverse border border-black">
      {/* TEXTO */}
      <article className="md:w-[65%] h-full flex gap-5 justify-center  items-center">
        <ul className="flex flex-col h-fit gap-6  text-xl lg:text-4xl lg:gap-8">
          <li className="pi pi-linkedin"></li>
          <li className="pi pi-github"></li>
          <li className="pi pi-address-book"></li>
          <li className="pi pi-instagram"></li>
        </ul>

        <div className="flex flex-col gap-2 ml-3 h-fit ">
          <h2 className="text-3xl  sm:text-lg md:text-2xlxl lg:text-7xl lg:text-red-500">
            Olá! Sou Francisco Expedito
          </h2>
          <p className="text-lg sm:text-blue-600 md:text-xs lg:text-3xl lg:tracking-widest ">
            Sou estudante de Desenvolvimento Full Stack, Mobile Android e
            Analista de Sistemas.
          </p>
        </div>
      </article>

      {/* IMAGEM */}
      <article className="md:w-[35%] flex justify-center">
        <img
          className="rounded-2xl w-[160px] md:w-[200px] lg:w-[400px]"
          src={foto}
          alt="Foto"
        />
      </article>
    </div>
  );
};

export default My_Infos;

// < 640px        → base (sem prefixo)
// ≥ 640px (sm)  → sm:
// ≥ 768px (md)  → md:
// ≥ 1024px (lg) → lg:
// ≥ 1280px (xl) → xl:
