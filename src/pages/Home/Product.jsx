const Product = () => {
  return (
    <div className="wrapper mt-[50px] sm:mt-[100px]">
      <div className="flex lg:flex-row flex-col w-full max-w-[1200px] justify-between items-center gap-10">
        <div className="w-full py-[50px] bg-greenGr flex justify-center items-center lg:rounded-br-[30px] lg:rounded-tr-[30px] mid:rounded-tl-[30px] mid:rounded-bl-[30px]">
          <img
            src="/phone.png"
            className="max-w-[180px] lg:w-[260px] drop-shadow-phone object-contain"
            alt=""
          />
        </div>
        <div className="flex w-[90%] lg:pr-[40px] lg:w-full justify-start items-center sm:text-left text-center sm:items-start flex-col gap-6">
          <h2 className="title">Headline for Abiu Product</h2>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur. Tristique lectus volutpat
            enim eu condimentum risus odio. Lectus vitae egestas egestas est
            ornare varius cras faucibus.
          </p>
          <p className="para">
            Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac felis
            egestas dignissim habitant fringilla. Nulla dapibus fermentum
            egestas vitae turpis tempus at bibendum velit. Ultricies eget.
          </p>
          <div className="flex sm:flex-row flex-col justify-start gap-5 items-center ">
            <button className="cta-btn">Book a Demo</button>
            <a href="#">
              <img
                src="/download.png"
                className="w-[180px] sm:w-[160px] object-contain"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
