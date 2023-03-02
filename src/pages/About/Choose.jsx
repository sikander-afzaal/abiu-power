import WhyCard from "../../components/WhyCard";

const Choose = () => {
  return (
    <div className="wrapper mt-[50px] sm:mt-[100px]">
      <div className="contain flex-col justify-center items-center gap-8">
        <h2 className="title">Why Choose Abiu</h2>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 w-full gap-6 lg:gap-4">
          <WhyCard
            img="/simple.png"
            title="Simple"
            desc="Our AI powered technology analyzes millions of  energy usage data and not only simplifies actionable insights, but gives you the option of automating these actions to help save time."
          />
          <WhyCard
            img="/fun.png"
            title="Fun"
            desc="We make it fun for you to become more climate-conscious through our intuitive user interface, rewards, community activities and competitions
            "
          />
          <WhyCard
            img="/impactful.png"
            title="Impactful"
            desc="This collective energy saving effort is helping to build a virtual power plant that rewards our users for the difference they make to our energy systems, balances demand on our grid, and reduces the need for polluting power plants.
            "
          />
        </div>
        <button className="cta-btn">Book a Demo</button>
      </div>
    </div>
  );
};

export default Choose;
