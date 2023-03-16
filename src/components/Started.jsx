const Started = () => {
  return (
    <div className="wrapper mt-[30vw] sm:mt-[180px]">
      <div className="contain px-10 lg:px-20 relative pb-[40px] pt-[30vw] sm:pt-[200px] lg:py-[60px] lg:flex-row flex-col rounded-[30px] bg-greenGr drop-shadow-started justify-end items-center">
        <img
          src="/plane.png"
          className="max-w-[600px] xl:max-w-full absolute top-0 left-1/2 -translate-x-1/2 lg:-translate-x-0 lg:left-0 object-contain -translate-y-[33%] w-full lg:w-auto"
          alt=""
        />
        <div className=" flex justify-start items-center text-center lg:text-left lg:items-start flex-col gap-5">
          <h2 className="title">Get Started Today</h2>

          <a href="https://calendly.com/omale" target="_blank" rel="noreferrer">
              <button className="cta-btn">Book a Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Started;
