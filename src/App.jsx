import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let animationFrame;

    function raf(time) {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[var(--color-about-bg)]">
      <Home />
    </div>
  );
};

export default App;
