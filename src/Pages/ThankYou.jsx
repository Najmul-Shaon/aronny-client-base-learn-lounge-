import { FaBangladeshiTakaSign } from "react-icons/fa6";
import CallToAction from "../Components/CallToAction";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const ThankYou = () => {
  return (
    <div className="mt-[120px] container mx-auto">
      <h2 className="text-center font-bold text-3xl">ধন্যবাদ!!</h2>
      <p className="text-center font-bold text-xl">
        আপনার অর্ডারটি গ্রহন করা হয়েছে।।
      </p>
      <h3 className="text-center mt-12 mb-4 text-xl underline">
        অর্ডারের বিবরণ
      </h3>
      <div className="flex justify-center gap-12 border-2 rounded-xl w-1/2 mx-auto p-8">
        <ul className="border rounded-xl text-end p-4 text-lg font-bold">
          <li>অর্ডার প্রদানের তারিখঃ</li>
          <li>পন্যের নামঃ</li>
          <li>সর্বমোটঃ</li>
          <li>নামঃ</li>
          <li>ফোন নাম্বারঃ</li>
          <li>ঠিকানাঃ</li>
          <li>স্ট্যাটাসঃ</li>
        </ul>
        <ul className="border rounded-lg p-4 text-lg">
          <li>12/01/2025</li>
          <li>অরণ্য ডায়া শিফা</li>
          <li className="flex gap-1 items-center">
            <FaBangladeshiTakaSign></FaBangladeshiTakaSign>1000
          </li>
          <li>Najmul Shaon</li>
          <li>01721933810</li>
          <li>Dhaka, Bangladesh</li>
          <li>Processing</li>
        </ul>
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
