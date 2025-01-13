import { Helmet } from "react-helmet-async";
import { FaArrowDown } from "react-icons/fa";
import dayaShifa_3 from "../assets/images/daya-shifa-3.jpg";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import InstructionTabs from "../Components/InstructionTabs";

const AronnyDayaShifaDetails = () => {
  return (
    <>
      <Helmet>
        <title>অরণ্য || ডায়া শিফা</title>
      </Helmet>
      <div className="hero min-h-screen mt-[120px] md:mt-[60px]container mx-auto">
        <div className="hero-content flex-col lg:flex-row border-2 gap-8 border-light_color">
          <figure className="md:w-5/12">
            <img src={dayaShifa_3} className="w-full rounded-lg shadow-2xl" />
          </figure>
          <div className="md:w-7/12 space-y-4">
            <h2 className="card-title text-3xl">
              অরণ্য ডায়া শিফা <div className="badge badge-secondary">-28%</div>
            </h2>
            <p>কেন ডায়া শিফা সেবন করবেন-</p>
            <ul className="list-disc ml-6">
              <li>
                ঔষধ ও ইনসুলিন ছাড়াই ডায়াবেটিস স্থায়ীভাবে নিয়ন্ত্রণে থাকবে।
              </li>
              <li>রক্তে শর্করার মাত্রা বৃদ্ধি জনিত সমস্যার সমাধান করবে।</li>
              <li>
                শারীরিক দুর্বলতা দূর করে দ্রুত শক্তি (ইনস্ট্যান্ট এনার্জি)
                যোগাবে।
              </li>
              <li>ঘন ঘন প্রস্রাবের সমস্যা থেকে মুক্তি দেবে।</li>
              <li>
                আরামদায়ক ঘুম নিশ্চিত করে অনিদ্রা দূর করবে। রক্তে কোলেস্টেরলের
                মাত্রা নিয়ন্ত্রণে থাকবে।
              </li>
              <li>ওজন কমে যাওয়া প্রতিরোধ করবে এবং শরীরের শক্তি বজায় রাখবে।</li>
              <li>
                অতিরিক্ত পিপাসা ও মুখ শুকিয়ে যাওয়ার সমস্যা থেকে মুক্তি দেবে
              </li>
            </ul>
            <p className="text-center text-red-600 text-2xl">
              (সারাদেশে ফ্রি ডেলিভারি)
            </p>
            <p className="flex items-center justify-center md:justify-start gap-1 font-semibold text-lg">
              দামঃ <FaBangladeshiTakaSign></FaBangladeshiTakaSign>১০০০{" "}
              <span className="line-through">১৩৯৯</span>
            </p>
            <div className="md:flex text-center gap-6">
              <Link to="/checkout">
                <button
                  className="text-xl btn bg-gradient-to-r from-[#3AA34D] to-[#2E8A40] text-white font-bold 
  px-6 py-3 rounded-full shadow-lg transition transform hover:translate-y-[-4px] 
  hover:shadow-2xl hover:brightness-110 active:scale-95 
  active:bg-gradient-to-r active:from-[#267C32] active:to-[#1F5E28] 
  after:content-[''] after:absolute after:inset-0 after:rounded-full after:ring-2 
  after:ring-[#3AA34D] after:ring-opacity-50 after:scale-95 after:transition-all"
                >
                  🌿 অর্ডার করুন <FaArrowDown></FaArrowDown>
                </button>
              </Link>
              <div className="divider lg:divider-horizontal">অথবা</div>
              <button
                className="text-xl btn bg-gradient-to-r from-[#3AA34D] to-[#2E8A40] text-white font-bold 
  px-6 py-3 rounded-full shadow-lg transition transform hover:translate-y-[-4px] 
  hover:shadow-2xl hover:brightness-110 active:scale-95 
  active:bg-gradient-to-r active:from-[#267C32] active:to-[#1F5E28] 
  after:content-[''] after:absolute after:inset-0 after:rounded-full after:ring-2 
  after:ring-[#3AA34D] after:ring-opacity-50 after:scale-95 after:transition-all"
              >
                কল করুনঃ 01721933810
              </button>
            </div>
          </div>
        </div>
      </div>
      <InstructionTabs></InstructionTabs>
    </>
  );
};

export default AronnyDayaShifaDetails;
