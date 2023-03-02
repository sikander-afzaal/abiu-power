const Solutions = () => {
  return (
    <div className="wrapper mt-[100px] sm:mt-[150px] relative">
      <div className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 bg-[#FFFFFF17] blur-[125px] rounded-full aspect-square w-full max-w-[795px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -translate-x-1/2 bg-[#FFFFFF17] blur-[125px] rounded-full aspect-square w-full max-w-[795px] -z-10 pointer-events-none"></div>
      <div className="contain flex-col justify-center items-center gap-5">
        <div className="flex justify-center items-center flex-col text-center gap-3">
          <h2 className="title">Headline for Solutions</h2>
          <p className="para max-w-[710px]">
            Lorem ipsum dolor sit amet consectetur. Augue ac aenean tempor
            pharetra sed luctus aliquet pharetra. In tincidunt gravida eu
            scelerisque velit in.
          </p>
        </div>
        <div className="grid mt-[120px] grid-cols-[50px__1fr] lg:grid-cols-[1fr__81px__1fr] w-full gap-x-5 lg:gap-x-16 gap-y-[40px] lg:gap-y-[150px]">
          {/* row 1 starts here ------------------------ */}
          <div className="flex justify-center items-start flex-col gap-5 sm:mt-0 mt-2">
            <h3 className="text-white font-semibold text-2xl sm:text-[26px]">
              Energy Efficiency
            </h3>
            <p className="text-white opacity-60 sm:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur. Tristique lectus volutpat
              enim eu condimentum risus odio. Lectus vitae egestas egestas est
              ornare varius cras faucibus.
            </p>
            <p className="text-white opacity-60 sm:text-base text-sm ">
              Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac
              felis egestas dignissim habitant fringilla. Nulla dapibus
              fermentum egestas vitae turpis tempus at bibendum velit. Ultricies
              eget.
            </p>
          </div>
          <Dot
            classes={
              "lg:col-auto col-start-1 col-end-2 row-start-1 row-end-2 lg:row-auto"
            }
          />
          <div className="bg-[#FFFFFF12] lg:flex rounded-[43px] h-[280px] hidden justify-center items-center w-full">
            <img
              src="/lamp.png"
              className="translate-x-7 -translate-y-7 object-contain max-w-full"
              alt=""
            />
          </div>
          {/* row 1 ends here ------------------------ */}
          {/* row 2 starts here ------------------------ */}
          <div className="bg-[#FFFFFF12] lg:flex rounded-[43px] h-[280px] hidden justify-center items-center w-full">
            <img
              src="/marker.png"
              className=" -translate-y-8 object-contain max-w-full"
              alt=""
            />
          </div>

          <Dot
            classes={
              "lg:col-auto col-start-1 col-end-2 row-start-2 row-end-3 lg:row-auto"
            }
          />
          <div className="flex justify-center items-start flex-col gap-5 sm:mt-0 mt-2">
            <h3 className="text-white font-semibold text-2xl sm:text-[26px]">
              Supply chain
            </h3>
            <p className="text-white opacity-60 sm:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur. Tristique lectus volutpat
              enim eu condimentum risus odio. Lectus vitae egestas egestas est
              ornare varius cras faucibus.
            </p>
            <p className="text-white opacity-60 sm:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac
              felis egestas dignissim habitant fringilla. Nulla dapibus
              fermentum egestas vitae turpis tempus at bibendum velit. Ultricies
              eget.
            </p>
          </div>
          {/* row 2 ends here ------------------------ */}
          {/* row 3 starts here ------------------------ */}
          <div className="flex justify-center items-start flex-col gap-5 sm:mt-0 mt-2">
            <h3 className="text-white font-semibold text-2xl sm:text-[26px]">
              Finance
            </h3>
            <p className="text-white opacity-60 sm:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur. Tristique lectus volutpat
              enim eu condimentum risus odio. Lectus vitae egestas egestas est
              ornare varius cras faucibus.
            </p>
            <p className="text-white opacity-60 sm:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac
              felis egestas dignissim habitant fringilla. Nulla dapibus
              fermentum egestas vitae turpis tempus at bibendum velit. Ultricies
              eget.
            </p>
          </div>
          <Dot
            noLine
            classes={
              "lg:col-auto col-start-1 col-end-2 row-start-3 row-end-4 lg:row-auto"
            }
          />
          <div className="bg-[#FFFFFF12] lg:flex rounded-[43px] h-[280px] hidden justify-center items-center w-full ">
            <img
              src="/wallet.png"
              className="translate-x-7 -translate-y-12 object-contain max-w-full"
              alt=""
            />
          </div>
          {/* row 3 ends here ------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Solutions;

const Dot = ({ noLine, classes }) => {
  return (
    <div className={`relative h-full ${classes}`}>
      {!noLine && (
        <div className="border-l-[3px] border-[#3C4349] border-dashed absolute left-[49%] top-[50px] lg:top-[81px] -translate-x-1/2 lg:h-[calc(100%_+_69px)] h-[calc(100%_-_10px)]"></div>
      )}

      <div className="w-full aspect-square bg-[#FFFFFF1F] rounded-full border-2 border-solid border-[#FFFFFF21] flex justify-center items-center">
        <div className="bg-cyan w-[23px] lg:w-[35px] rounded-full aspect-square"></div>
      </div>
    </div>
  );
};
