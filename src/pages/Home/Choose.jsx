import WhyCard from "../../components/WhyCard";

const Choose = () => {
  return (
    <div className="wrapper mt-[100px] sm:mt-[150px]">
      <div className="contain flex-col justify-center items-center gap-8">
        <h2 className="title">Why Choose Abiu</h2>
        <div className="grid place-items-center grid-cols-1 lg:grid-cols-3 w-full gap-6 lg:gap-4">
          <WhyCard
            img="/leaf.png"
            title="Name of benefit"
            desc="Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac felis egestas dignissim habitant fringilla. "
          />
          <WhyCard
            img="/graph.png"
            title="Name of benefit"
            desc="Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac felis egestas dignissim habitant fringilla. "
          />
          <WhyCard
            img="/socket.png"
            title="Name of benefit"
            desc="Lorem ipsum dolor sit amet consectetur. Nunc dui facilisi a ac felis egestas dignissim habitant fringilla. "
          />
        </div>
        <a href="https://calendly.com/omale" target="_blank" rel="noreferrer">
              <button className="cta-btn">Book a Demo</button>
        </a>
      </div>
    </div>
  );
};

export default Choose;
