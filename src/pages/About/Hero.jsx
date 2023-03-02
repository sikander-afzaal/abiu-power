const Hero = () => {
  return (
    <div className="wrapper bg-cover lg:p-0 bg-aboutBg bg-center py-[200px] lg:min-h-screen">
      <div className="contain sm:text-left text-center lg:min-h-screen  justify-center flex-col items-center sm:items-start gap-5 ">
        <h2 className="title max-w-[585px]">
          An energized community making a difference.
        </h2>
        <p className="para max-w-[500px]">
          We are on a mission to make clean energy more affordable and
          accessible to everyone.
        </p>
        <p className="para max-w-[500px]">
          We are inspired by the opportunity for homes and technology to play an
          active part in reducing the cost of energy and lowering CO2 emissions
          through renewable energy usage.
        </p>
        <button className="cta-btn">Book a Demo</button>
      </div>
    </div>
  );
};

export default Hero;
