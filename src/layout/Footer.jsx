import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="wrapper mt-[140px]">
      <div className="contain sm:flex-row flex-col sm:gap-0 gap-8 justify-between items-center border-t-2 border-solid border-[#FFFFFF2B] py-[20px]">
        <Link to={"/"}>
          <img
            src="/logo2.png"
            className="w-[150px] drop-shadow-shadow1"
            alt=""
          />
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link to={"/about"} className="text-white">
            About
          </Link>
          <a href={"#contact"} className="text-white">
            Get in touch
          </a>
        </div>
        <div className="flex justify-center items-center gap-6">
          <a href="https://instagram.com/joinabiu" target={"blank"}>
              <img
                src="/instagram.png"
                className="w-[18px] object-contain"
                alt=""
              />
            </a>
          <a href="#" target={"blank"}>
            <img
              src="/twitter.png"
              className="w-[18px] object-contain"
              alt=""
            />
          </a>
          <a href="#" target={"blank"}>
            <img
              src="/linkedin.png"
              className="w-[18px] object-contain"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center text-center items-center w-full h-[80px] sm:h-[100px] bg-[#01101B]">
        <p className="text-[#FFFFFF6B] sm:text-base text-sm">
          hello@abiu.earth
          <br></br>
          345 6th street San Francisco, CA
          <br></br>
          © 2023 All Rights Reserved
          <br></br>
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
