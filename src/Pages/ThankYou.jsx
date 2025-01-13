import { FaBangladeshiTakaSign } from "react-icons/fa6";
import CallToAction from "../Components/CallToAction";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className="mt-[120px] container mx-auto p-2 md:p-2">
      <h2 className="text-center font-bold text-5xl">ধন্যবাদ!!</h2>
      <p className="text-center font-bold text-3xl mt-2">
        আপনার অর্ডারটি গ্রহন করা হয়েছে।।
      </p>
      <h3 className="text-center mt-12 mb-4 text-xl underline">
        অর্ডারের বিবরণ
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 border-2 rounded-xl md:w-1/2 mx-auto p-8">
        <div className=" space-y-2">
          <p className="text-xl font-semibold">
            অর্ডার প্রদানের তারিখঃ
            <span className="font-normal">12/01/2025</span>
          </p>
          <p className="text-xl font-semibold">
            পন্যের নামঃ <span className="font-normal">অরণ্য ডায়া শিফা</span>
          </p>
          <p className="flex gap-1 items-center text-xl font-semibold">
            সর্বমোটঃ <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
            <span className="font-normal">1000</span>
          </p>
          <p className="text-xl font-semibold">
            স্ট্যাটাসঃ <span className="font-normal">Processing</span>
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xl font-semibold">
            নামঃ <span className="font-normal">Najmul Shaon</span>
          </p>
          <p className="text-xl font-semibold">
            ফোন নাম্বারঃ <span className="font-normal">01721933810</span>
          </p>
          <p className="text-xl font-semibold">
            ঠিকানাঃ <span className="font-normal">Dhaka, Bangladesh</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center my-12">
        <Link to="/">
          <button className="btn bg-primary_color hover:bg-primary_color_hover text-xl text-white">
            <FaHome></FaHome> হোমে ফিরে যান
          </button>
        </Link>
      </div>

      <CallToAction></CallToAction>
    </div>
  );
};

export default ThankYou;
