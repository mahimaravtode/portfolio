import { useContext, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarColorContext, NavbarContext } from "../../context/NavContext";

const Navbar = () => {
  const navGreenRef = useRef(null);
  const [, setNavOpen] = useContext(NavbarContext);
  const [navColor] = useContext(NavbarColorContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-[60] flex fixed  items-start justify-between inset-x-4 top-4 lg:px-12 px-8 h-16 transition-colors duration-300 ${scrolled ? "rounded-full bg-black overflow-hidden" : "bg-transparent rounded-t-2xl overflow-hidden"}`}
    >
      <div className="py-4">
        <Link
          to="/"
          className="block font-[font2] text-2xl uppercase leading-none lg:text-4xl"
          style={{ color: navColor }}
        >
          Mahima
        </Link>
      </div>
      <button
        type="button"
        aria-label="Open navigation"
        onClick={() => {
          setNavOpen(true);
        }}
        className="h-full relative lg:w-[16vw] w-48 cursor-pointer"
      >
        <div
          ref={navGreenRef}
          className={`absolute top-0 h-0  w-full bg-[var(--color-accent)] transition-all ${scrolled ? "rounded-tr-full" : ""}`}
        ></div>
        <div className="relative h-full  flex flex-col justify-center items-end lg:gap-1.5 gap-0.5">
          <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
          <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
        </div>
      </button>
    </div>
  );
};

export default Navbar;
