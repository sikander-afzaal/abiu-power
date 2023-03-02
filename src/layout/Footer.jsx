import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="wrapper mt-[140px]">
      <div className="contain sm:flex-row flex-col sm:gap-0 gap-8 justify-between items-center border-t-2 border-solid border-[#FFFFFF2B] py-[20px]">
        <img src="/logo.png" className="w-[64px] drop-shadow-shadow1" alt="" />
        <div className="flex justify-center items-center gap-4">
          <Link to={"/about"} className="text-white">
            About Us
          </Link>
          <Link to={"/about"} className="text-white">
            Contact Us
          </Link>
        </div>
        <div className="flex justify-center items-center gap-6">
          <a href="#" target={"blank"}>
            <img src="/fb.png" className="w-[18px] object-contain" alt="" />
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
          ABIU.AI 345 6th street San Francisco, CA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
