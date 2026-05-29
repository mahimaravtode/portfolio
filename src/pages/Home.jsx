import HomeHeroText from "../components/home/HomeHeroText";
import HomeBottomText from "../components/home/HomeBottomText";
import Globe from "../components/home/Globe";
import Agence from "./Agence";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <main
        id="home"
        className="relative w-screen overflow-hidden bg-[var(--color-home-bg)] text-white"
      >
        <Globe />
        <div className="absolute inset-0 z-0 h-full w-full bg-[var(--color-menu-bg)]/20 backdrop-blur-xs"></div>
        <div className="relative flex min-h-screen w-screen flex-col justify-between overflow-hidden px-4 pb-5 pt-24 lg:px-6 lg:pb-6 lg:pt-8">
          <HomeHeroText />
          <HomeBottomText />
        </div>
      </main>
      <Agence />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
