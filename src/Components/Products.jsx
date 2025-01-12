import { FaArrowDown } from "react-icons/fa";
import dayaShifa_2 from "../assets/images/daya-shifa-2.jpg";
import dayaShifa_3 from "../assets/images/daya-shifa-3.jpg";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Products = () => {
  return (
    <div className="my-24">
      <h3 className="text-4xl text-center font-bold">আমাদের পণ্যগুলি</h3>
      <div className="grid grid-cols-5 gap-6">
        {/* product 01  */}
        <div className="card bg-base-100 shadow-xl">
          <figure className="p-3">
            <img
              src={dayaShifa_3}
              alt="image of অরণ্য ডায়া শিফা"
              className="rounded-xl w-full scale-125"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">অরণ্য ডায়া শিফা</h2>
            <p className="flex items-center gap-1 font-semibold text-base">
              <FaBangladeshiTakaSign></FaBangladeshiTakaSign>১০০০{" "}
              <span className="line-through">১৩৯৯</span>
            </p>
            <div className="card-actions">
              <button
                className="btn bg-gradient-to-r from-[#3AA34D] to-[#2E8A40] text-white font-bold 
                            px-8 py-4 rounded-full shadow-lg transition transform hover:translate-y-[-4px] 
                            hover:shadow-2xl hover:brightness-110 active:scale-95 
                            active:bg-gradient-to-r active:from-[#267C32] active:to-[#1F5E28] 
                            after:content-[''] after:absolute after:inset-0 after:rounded-full after:ring-2 
                            after:ring-[#3AA34D] after:ring-opacity-50 after:scale-95 after:transition-all"
              >
                🌿 অর্ডার করুন <FaArrowDown></FaArrowDown>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
