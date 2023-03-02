const Product = () => {
  return (
    <div className="wrapper mt-[50px] sm:mt-[100px]">
      <div className="contain justify-between items-center gap-10">
        <div className="bg-greenGr flex justify-center items-center rounded-br-[30px] rounded-tr-[30px] mid:rounded-tl-[30px] mid:rounded-bl-[30px]">
          <img
            src="/phone.png"
            className="max-w-[260px] drop-shadow-phone object-contain"
            alt=""
          />
        </div>
        <div className="flex justify-start items-start flex-col gap-6">
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
        </div>
      </div>
    </div>
  );
};

export default Product;
