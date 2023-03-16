const Product = () => {
  return (
    <div className="wrapper mt-[50px] sm:mt-[100px]">
      <div className="flex lg:flex-row flex-col w-full max-w-[1200px] justify-between items-center gap-10">
       
        <div className="flex w-[90%] lg:pr-[40px] lg:w-full justify-start items-center sm:text-left text-center sm:items-start flex-col gap-6">
          <h4 className="title">Featured API use case</h4>
         
          <p className="para">
          Our AI powered APIs make it easy to integrate peak hour 
          usage data to enable developers build applications for effective demand side response.
          </p>
          <div className="flex sm:flex-row flex-col justify-start gap-5 items-center ">
            

            <a href="https://calendly.com/omale" target="_blank" rel="noreferrer">
              <button className="cta-btn">Book a Demo</button>
            </a>
            {/* <a href="#">
              <img
                src="/download.png"
                className="w-[180px] sm:w-[160px] object-contain"
                alt=""
              />
            </a> */}
          </div>
        </div>

        <div className="w-full overflow-visible py-[50px] bg-greenGr flex justify-center items-center lg:rounded-br-[30px] lg:rounded-tr-[30px] mid:rounded-tl-[30px] mid:rounded-bl-[30px]">
          <img
            src="/phone.webp"
            className="overflow-visible max-w-[180px] h-auto w-full lg:max-w-[260px]  object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
