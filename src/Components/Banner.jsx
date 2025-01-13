import { easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import coverBg from "../assets/images/cover_2.jpg";
import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <div
        className="hero min-h-screen w-full"
        style={{
          backgroundImage: `url(${coverBg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              আমাদের <span className="text-orange-400">কল</span> করুন
            </h1>
            <p className="text-white text-2xl">
              <span className="border px-4 py-2 rounded-2xl">
                <FaPhone className="inline mx-2 text-white rotate-90"></FaPhone>
                01721-933810
              </span>
            </p>
            <div className="flex justify-center mt-8 text-5xl gap-4">
              <a
                className="text-white"
                target="_blank"
                href="https://www.facebook.com/yousufali.sagor.75"
              >
                <FaFacebook></FaFacebook>
              </a>
              <a
                className="text-green-300"
                target="_blank"
                href="https://wa.me/qr/GULDRTKNR4YDN1"
              >
                <FaWhatsapp></FaWhatsapp>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
