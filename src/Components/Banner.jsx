import { easeOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import coverBg from "../assets/images/cover_2.jpg";
import { FaPhone } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      {/* <div className="hero bg-base-200 min-h-96 mb-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1">
            <motion.img
              src={team1}
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
            />
            <motion.img
              src={team1}
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 10, delay: 5, repeat: Infinity }}
              className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-400 shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">
              Focused, Productive,{" "}
              <motion.span
                animate={{ color: ["#FFC733", "#D98A00", "#FEA400 "] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Together
              </motion.span>
            </h1>
            <p className="py-6 text-xl">
              Join the largest global student community online and say goodbye
              to lack of motivation.
            </p>
            <Link to={"/"}>
              <button className="btn bg-orange-400 hover:bg-orange-300 text-white text-lg font-semibold">
                Stay Together Now
              </button>
            </Link>
          </div>
        </div>
      </div> */}
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
                <FaPhone className="inline mx-2 text-orange-400 rotate-90"></FaPhone>01721933810
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
