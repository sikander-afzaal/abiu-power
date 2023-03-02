const Hero = () => {
  return (
    <div className="wrapper bg-cover lg:p-0 bg-heroBg bg-center py-[200px] lg:min-h-screen">
      <div className="contain sm:text-left text-center lg:min-h-screen  justify-center flex-col items-center sm:items-start gap-5 ">
        <h2 className="title max-w-[585px]">
          Easy way to lower your energy cost. Climate action at your fingertips.
        </h2>
        <p className="para max-w-[500px]">
          Join our eco-conscious community and reduce your energy usage when it
          is most needed.
        </p>
        <button className="cta-btn">Book a Demo</button>
      </div>
    </div>
  );
};

export default Hero;
