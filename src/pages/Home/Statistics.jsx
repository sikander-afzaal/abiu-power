const Statistics = () => {
  return (
    <div className="wrapper mt-[100px] sm:mt-[150px]">
      <div className="contain flex-col justify-center items-center gap-10">
        <h2 className="title">Statistics Title</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-6 place-items-center ">
          <StatBox title="25k" desc="Lorem ipsum dolor sit amet consectetur." />
          <StatBox title="25k" desc="Lorem ipsum dolor sit amet consectetur." />
          <StatBox title="25k" desc="Lorem ipsum dolor sit amet consectetur." />
        </div>
      </div>
    </div>
  );
};

export default Statistics;

const StatBox = ({ title, desc }) => {
  return (
    <div className="rounded-full w-full lg:max-w-none max-w-[350px] aspect-square bg-[#FFFFFF0F] px-10 flex justify-center items-center text-center flex-col gap-6 border-2 border-dashed border-[#FFFFFF21]">
      <h3 className="text-cyan font-semibold text-[64px]">{title}</h3>
      <p className="text-white opacity-60">{desc}</p>
    </div>
  );
};
