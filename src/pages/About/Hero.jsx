const Hero = () => {
  return (
    <div className="wrapper bg-cover lg:p-0 bg-aboutBg bg-center py-[200px] lg:min-h-screen">
      <div className="contain sm:text-left text-left lg:min-h-screen  justify-center flex-col items-center sm:items-start gap-5 ">
        <h2 className="title max-w-[585px]">
          About Abiu
        </h2>
        <p className="para max-w-[500px]">
          We started Abiu with the belief that technology will play a crucial
          role in the world's transition to a carbon free economy. 
        </p>

        <p className="para max-w-[500px]">

        Transitioning to sustainability requires a deep understanding of the environmental 
        impact of a company's operations and the ability to develop and implement sustainable practices.
         Many companies may not have the expertise or resources to develop and implement these practices on their own.
         <br/>
        Consumers are increasingly demanding sustainable products and services, 
        and companies that do not meet these demands risk losing market share.

        </p>

        <p className="para max-w-[500px]">
          Abiu.earth will leverage data to empower consumers and businesses to 
          contribute to the worlds transition to a green economy
          by making data available where it is the most impactful.
        </p>
        {/* <a href="https://calendly.com/omale" target="_blank" rel="noreferrer">
              <button className="cta-btn">Book a Demo</button>
        </a> */}
      </div>
    </div>
  );
};

export default Hero;
