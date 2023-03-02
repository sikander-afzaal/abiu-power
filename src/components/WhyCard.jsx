const WhyCard = ({ img, title, desc }) => {
  return (
    <div className=" hover:-translate-y-5 transition-all duration-500 flex h-full max-w-[380px] justify-start items-center flex-col text-center gap-5 pt-[60px] pb-[50px] px-5 xl:px-[40px] w-full border border-solid border-[#FFFFFF21] bg-[#FFFFFF0F] rounded-[30px]">
      <div className="rounded-full mb-3 bg-[#43E2A02B] aspect-square flex justify-center items-center w-[117px]">
        <img src={img} className="object-contain max-w-[50px]" alt="" />
      </div>
      <h4 className="text-white text-xl font-medium">{title}</h4>
      <p className="text-white opacity-60 ">{desc}</p>
    </div>
  );
};

export default WhyCard;
