import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
import ReactGA from "react-ga";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  //tracking
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  useEffect(() => {
    const setBg = () => {
      if (window.scrollY > 150) {
        setHeaderBg(true);
      } else {
        setHeaderBg(false);
      }
    };
    window.addEventListener("scroll", setBg);
    return () => {
      window.removeEventListener("scroll", setBg);
    };
  }, []);

  return (
    <header
      className={`wrapper fixed top-0 transition-all duration-300 left-0 z-[70] ${
        headerBg ? "bg-dark" : "bg-transparent"
      }`}
    >
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="fixed top-0 left-0 w-full h-full bg-black opacity-60 z-[88] sm:hidden block"
        ></div>
      )}
      <div className="contain py-5 justify-between items-center">
        <HashLink
          onClick={() => {
            setHeaderToggle(false);
            React.useEffect(() => {
              window.scrollTo(0, 0);
            }, []);
          }}
          to={"/"}
        >
          <img
            src="/logo2.png"
            className="object-contain w-[144px] drop-shadow-shadow1"
            alt=""
          />
        </HashLink>
        <nav
          className={`flex z-[90] sm:flex-row flex-col py-[7rem] px-[3rem] sm:p-0 overflow-y-auto sm:overflow-visible bg-dark sm:bg-transparent h-full sm:h-auto w-full max-w-[420px] sm:w-auto sm:max-w-none justify-start sm:justify-end  items-center gap-8 sm:gap-5 transition-all duration-1000 sm:static fixed top-0   ${
            headerToggle ? "right-0" : "-right-[700px]"
          }`}
        >
          <HashLink
            onClick={() => {
              setHeaderToggle(false);
              React.useEffect(() => {
                window.scrollTo(0, 0);
              }, []);
            }}
            to={"/"}
            className="text-white text-xl sm:text-base"
          >
            Home
          </HashLink>

          <HashLink
            onClick={() => setHeaderToggle(false)}
            to={"/about"}
            className="text-white text-xl sm:text-base"
          >
            About
          </HashLink>
          <HashLink
            onClick={() => setHeaderToggle(false)}
            to={"/#contact"}
            className="text-white text-xl sm:text-base"
          >
            Get in touch
          </HashLink>

          <a href="https://calendly.com/omale" target="_blank" rel="noreferrer">
            <button onClick={() => setHeaderToggle(false)} className="cta-btn">
              Book a Demo
            </button>
          </a>

          {/* <button onClick={() => setHeaderToggle(false)} className="cta-btn">
            Book a Demo
          </button> */}
        </nav>
        {headerToggle ? (
          <svg
            onClick={() => setHeaderToggle(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 h-7 cursor-pointer relative z-[91] sm:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setHeaderToggle(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-7 h-7 cursor-pointer relative z-[91] sm:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
