import gsap, { Bounce } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { forwardRef, useEffect, useRef } from "react";

const Solutions = () => {
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();
  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(dot1.current, {
        scrollTrigger: {
          trigger: dot1.current,
          start: "top 90%",
        },
        scale: 1,
        duration: 0.7,
        ease: Bounce.easeOut,
      });
      gsap.to(dot2.current, {
        scrollTrigger: {
          trigger: dot2.current,
          start: "top 90%",
        },
        scale: 1,
        duration: 0.7,
        ease: Bounce.easeOut,
      });
      gsap.to(dot3.current, {
        scrollTrigger: {
          trigger: dot3.current,
          start: "top 90%",
        },
        scale: 1,
        duration: 0.7,
        ease: Bounce.easeOut,
      });
    });
    return () => {
      context.revert();
    };
  }, []);

  return (
    <div className="wrapper mt-[100px] sm:mt-[150px] relative">
      <div className="absolute top-0 -translate-y-1/2 right-0 translate-x-1/2 bg-[#FFFFFF17] blur-[125px] rounded-full aspect-square w-full max-w-[795px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -translate-x-1/2 bg-[#FFFFFF17] blur-[125px] rounded-full aspect-square w-full max-w-[795px] -z-10 pointer-events-none"></div>
      <div className="contain flex-col justify-center items-center gap-5">
        <div className="flex justify-center items-center flex-col text-center gap-3">
          <h2 className="title">Sustainabilty API solutions in development.</h2>
          <p className="para max-w-[710px]">
            {/* Lorem ipsum dolor sit amet consectetur. Augue ac aenean tempor
            pharetra sed luctus aliquet pharetra. In tincidunt gravida eu
            scelerisque velit in. */}
          </p>
        </div>
        <div className="grid mt-[120px] grid-cols-[50px__1fr] lg:grid-cols-[1fr__81px__1fr] w-full gap-x-5 lg:gap-x-16 gap-y-[40px] lg:gap-y-[150px]">
          {/* row 1 starts here ------------------------ */}
          <div className="flex justify-center items-start flex-col gap-5 sm:mt-0 mt-2">
            <h3 className="text-white font-semibold text-2xl sm:text-[26px]">
              For Brands
            </h3>
            <p className="text-white opacity-60 sm:text-base text-sm">
            
            Delight your customers by embedding carbon emission metrics in their journey with you.
            Secure REST API implementation with no transfer of personal data.
            </p>
           
          </div>
          <Dot
            ref={dot1}
            classes={
              "lg:col-auto col-start-1 col-end-2 row-start-1 row-end-2 lg:row-auto"
            }
          />
          <div className="bg-[#FFFFFF12] lg:flex rounded-[43px] h-[280px] hidden justify-center items-center w-full">
            <img
              src="/wallet.png"
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
            ref={dot2}
            classes={
              "lg:col-auto col-start-1 col-end-2 row-start-2 row-end-3 lg:row-auto"
            }
          />
          <div className="flex justify-center items-start flex-col gap-5 sm:mt-0 mt-2">
            <h3 className="text-white font-semibold text-2xl sm:text-[26px]">
              Transportation & Logistics
            </h3>
            <p className="text-white opacity-60 sm:text-base text-sm">
            Turn your supply chain into a competitive advantage. 
            Add accredited emissions calculations for each shipment, and meet customer demand for climate action in supply chains.
            </p>
          </div>
          {/* row 2 ends here ------------------------ */}
          {/* row 3 starts here ------------------------ */}
          <div className="flex justify-center items-start flex-col gap-5 sm:mt-0 mt-2">
            <h3 className="text-white font-semibold text-2xl sm:text-[26px]">
              AI powered Analytics 
            </h3>
            <p className="text-white opacity-60 sm:text-base text-sm">
            Our APIs provides personalized recommendations that make it easy to make the most sustainable decisions.
            </p>

          </div>
          <Dot
            ref={dot3}
            noLine
            classes={
              "lg:col-auto col-start-1 col-end-2 row-start-3 row-end-4 lg:row-auto"
            }
          />
          <div className="bg-[#FFFFFF12] lg:flex rounded-[43px] h-[280px] hidden justify-center items-center w-full ">
            <img
              src="/lamp.png"
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

const Dot = forwardRef(({ noLine, classes }, ref) => {
  return (
    <div className={`relative h-full ${classes}`}>
      {!noLine && (
        <div className="border-l-[3px] border-[#3C4349] border-dashed absolute left-[49%] top-[50px] lg:top-[81px] -translate-x-1/2 lg:h-[calc(100%_+_69px)] h-[calc(100%_-_10px)]"></div>
      )}

      <div className="w-full aspect-square bg-[#FFFFFF1F] rounded-full border-2 border-solid border-[#FFFFFF21] flex justify-center items-center">
        <div
          ref={ref}
          className="scale-0 bg-cyan w-[23px] lg:w-[35px] rounded-full aspect-square"
        ></div>
      </div>
    </div>
  );
});
