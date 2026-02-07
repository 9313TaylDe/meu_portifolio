import Header from "./Header";
import My_Infos from "./My_Infos";
import SkillsAccordion from "./Skills";
import Skills from "./Skills";
import { frontendSkills, backendSkills } from "../components/Skills";

const Home = () => {
  return (
    <div className="w-full  flex flex-col items-center gap-6 relative">
      <Header />

      <section className="w-full md:w-[70%] flex justify-center shadow-[0_1px_6px_0] rounded-sm shadow-slate-400">
        <My_Infos />
      </section>
      <section className="p-4 w-[70%] shadow-sm shadow-slate-400 flex flex-col items-center justify-center rounded-sm">
        <h2 className="text-[30px] font-bold">Habilidades</h2>
        <SkillsAccordion title="Frontend & UI/UX" skills={frontendSkills} />
        <SkillsAccordion title="Backend" skills={backendSkills} />
      </section>
      <section className="w-full md:w-[70%] flex flex-col shadow-sm shadow-gray-400 p-4 rounded-sm">
        <h2 className="w-full text-center font-bold mb-4">Formação</h2>

        <div className="flex flex-col gap-4">
          {/* Item */}
          <div className="grid md:grid-cols-2">
            <div className="md:text-right text-center shadow shadow-black p-2">
              <h3 className="text-[13px] font-extrabold text-black ">
                Análise e Desenvolvimento de Sistemas
              </h3>
              <p className="text-[12px] text-gray-500">Uniasselvi</p>
            </div>
          </div>

          {/* Item invertido */}
          <div className="grid md:grid-cols-2">
            <div className="md:col-start-2 md:text-left text-center shadow shadow-black p-2">
              <h3 className="text-[13px] font-extrabold ">
                Linguagem de Programação Java
              </h3>
              <p className="text-[12px] text-gray-500">
                Universidade do Trabalho Digital
              </p>
            </div>
          </div>

          {/* Item */}
          <div className="grid md:grid-cols-2">
            <div className="md:text-right text-center shadow shadow-black p-2">
              <h3 className="text-[13px] font-extrabold text-black">
                Desenvolvimento Android
              </h3>
              <p className="text-[12px] text-gray-500">IRede</p>
            </div>
          </div>

          {/* Item invertido */}
          <div className="grid md:grid-cols-2">
            <div className="md:col-start-2 md:text-left text-center shadow shadow-black">
              <h3 className="text-[13px] font-extrabold">
                Desenvolvimento FullStack
              </h3>
              <p className="text-[12px] text-gray-500">Digital College</p>
            </div>
          </div>

          {/* Item */}
          <div className="grid md:grid-cols-2">
            <div className="md:text-right text-center shadow shadow-black p-2">
              <h3 className="text-[13px] font-extrabold text-black">
                Linguagem de Programação Python
              </h3>
              <p className="text-[12px] text-gray-500">SENAC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
