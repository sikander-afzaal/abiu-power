const Hero = () => {
  return (
    <div className="wrapper bg-cover lg:p-0 bg-heroBg bg-center py-[200px] lg:min-h-screen">
      <div className="contain sm:text-left text-center lg:min-h-screen  justify-center flex-col items-center sm:items-start gap-5 ">
        <h2 className="title max-w-[585px]">
          Simple, accurate climate data for you and your costumers.
        </h2>
        <p className="para max-w-[500px]">
        Engage customers in meaningful ways by embedding sustainability along every step 
        of their journey using our APIs.
        </p>
        <a href="https://calendly.com/omale" target="_blank" rel="noreferrer">
          <button className="cta-btn">Book a Demo</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
