import Header from "./Header";
import My_Infos from "./My_Infos";

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />

      <section className="w-full md:w-[70%] flex justify-center mt-10">
        <My_Infos />
      </section>
    </div>
  );
};

export default Home;
