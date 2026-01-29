import Header from "./Header";
import My_Infos from "./My_Infos";
import SkillsAccordion from "./Skills";
import Skills from "./Skills";
import { frontendSkills, backendSkills } from "../components/Skills";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      <section className="w-full md:w-[70%] flex justify-center ">
        <My_Infos />
      </section>
      <section className="pb-8 w-full flex flex-col items-center justify-center">
        <SkillsAccordion title="Frontend & UI/UX" skills={frontendSkills} />
        <SkillsAccordion title="Backend" skills={backendSkills} />
      </section>
    </div>
  );
};

export default Home;
