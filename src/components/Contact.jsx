import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div id="contact" className="wrapper mt-[40px] sm:mt-[60px] lg:mt-[120px]">
      <div className="contain lg:flex-row flex-col-reverse justify-between items-center lg:gap-6">
        <form className="w-full max-w-[510px] flex-col items-center lg:items-start justify-start gap-5 flex">
          <h2 className="title">Contact Us</h2>
          <input
            type="text"
            name="name"
            onChange={inputHandler}
            value={formData.name}
            placeholder="Full Name"
            className="w-full border-2 border-solid border-[#FFFFFF21] bg-[#FFFFFF0F] rounded-[10px] h-[54px] pl-3 text-[rgba(255,255,255,0.6)] text-base font-normal"
          />
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            value={formData.email}
            placeholder="Email"
            className="w-full border-2 border-solid border-[#FFFFFF21] bg-[#FFFFFF0F] rounded-[10px] h-[54px] pl-3 text-[rgba(255,255,255,0.6)] text-base font-normal"
          />
          <textarea
            name="message"
            onChange={inputHandler}
            value={formData.message}
            placeholder="Enter inquiry..."
            className="w-full border-2 pt-3 border-solid border-[#FFFFFF21] bg-[#FFFFFF0F] rounded-[10px] h-[115px] resize-none pl-3 text-[rgba(255,255,255,0.6)] text-base font-normal"
          ></textarea>
          <button className="cta-btn uppercase">Submit</button>
        </form>
        <img
          src="/contact-img.png"
          className="max-w-[500px] xl:max-w-[600px] object-contain w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
