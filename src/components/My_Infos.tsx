import foto from "../assets/foto.png";

const My_Infos = () => {
  return (
    <div className="w-full flex md:flex-row p-4 gap-6 items-center sm:flex-col-reverse flex-col-reverse ">
      {/* TEXTO */}
      <article className="md:w-[65%] h-full flex gap-5 justify-center md:flex sm:items-center sm:justify-center items-center flex-wrap ">
        <div className="flex flex-col gap-2 h-fit sm:justify-center sm:items-center w-full">
          <h2 className="text-xl tracking-tighter sm:text-lg md:text-4xl lg:text-5xl xl:text-7xlxl lg:text-red-500 md:text-purple-600 ">
            Olá, eu sou Expedito
          </h2>
          <p className="text-lg sm:text-gray-600 sm:text-xl sm:w-[60%] sm:text-center md:text-xs lg:text-3xl lg:tracking-widest ">
            Sou estudante de Desenvolvimento Full Stack, Mobile Android e
            Analista de Sistemas.
          </p>
        </div>
        <ul className="flex w-full  h-fit gap-6  text-xl lg:text-4xl md:text-xl md:flex sm:items-center sm:justify-center lg:gap-4 cursor-pointer">
          <li className="pi pi-linkedin"></li>
          <li className="pi pi-github"></li>
          <li className="pi pi-address-book"></li>
          <li className="pi pi-instagram"></li>
        </ul>
      </article>

      {/* IMAGEM */}
      <article className="md:w-[35%] h-full flex justify-center">
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
