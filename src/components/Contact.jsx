import axios from "axios";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const imgRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [modal, setModal] = useState(false);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: 10 },
        { y: -10, yoyo: true, repeat: -1, duration: 3 }
      );
    }, [imgRef.current]);
    return () => {
      context.revert();
    };
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post("https://sheet.bestundefined", formData);
    if (res.status === 200) {
      setModal(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Error Occured");
    }
  };

  return (
    <div id="contact" className="wrapper mt-[40px] sm:mt-[60px] lg:mt-[120px]">
      {modal && <Modal setModal={setModal} />}
      <div className="contain lg:flex-row flex-col-reverse justify-between items-center lg:gap-6">
        <form
          onSubmit={submitHandler}
          className="w-full max-w-[510px] flex-col items-center lg:items-start justify-start gap-5 flex"
        >
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
          ref={imgRef}
          src="/contact-img.png"
          className="max-w-[500px] xl:max-w-[600px] object-contain w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;

const Modal = ({ setModal }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setModal(false);
    }, 9000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setModal(false)}
        className="fixed top-0 left-0 w-full h-full z-[90] bg-black opacity-60"
      ></div>
      <div className="fixed z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[40px] px-[60px] bg-cyan rounded-[10px]">
        <svg
          onClick={() => setModal(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 absolute cursor-pointer top-3 right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <h2 className="text-white leading-[1.2] text-center uppercase font-semibold text-[40px]">
          Thanks for <br /> contacting us
        </h2>
      </div>
    </>
  );
};
