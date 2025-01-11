import { Helmet } from "react-helmet-async";
import { FaArrowDown, FaLeaf } from "react-icons/fa";

const AronnyDayaShifaDetails = () => {
    return (
        <>
            <Helmet>
                <title>অরণ্য || ডায়া শিফা</title>
            </Helmet>
        <div className="hero bg-light_color min-h-screen ">
          <div className="hero-content flex-col lg:flex-row">
            <figure className="md:w-3/12">
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                className="w-full rounded-lg shadow-2xl"
              />
            </figure>
            <div className="md:w-7/12">
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button
                className="btn bg-gradient-to-r from-[#3AA34D] to-[#2E8A40] text-white font-bold 
  px-8 py-4 rounded-full shadow-lg transition transform hover:translate-y-[-4px] 
  hover:shadow-2xl hover:brightness-110 active:scale-95 
  active:bg-gradient-to-r active:from-[#267C32] active:to-[#1F5E28] 
  after:content-[''] after:absolute after:inset-0 after:rounded-full after:ring-2 
  after:ring-[#3AA34D] after:ring-opacity-50 after:scale-95 after:transition-all"
              >
                🌿 Order Now <FaArrowDown></FaArrowDown>
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default AronnyDayaShifaDetails;
