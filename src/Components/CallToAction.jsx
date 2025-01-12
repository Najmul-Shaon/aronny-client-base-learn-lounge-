import { FaFacebook, FaPhone, FaWhatsapp } from "react-icons/fa";

const CallToAction = () => {
  return (
    <div className="bg-primary_color text-white py-12 my-24 rounded-2xl">
      <div className="text-center space-y-4">
        <p className="text-xl text-white font-bold">--বিস্তারিত জানতে--</p>
        <h2 className="text-white text-3xl font-bold">কল করুন</h2>
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
            className="text-white"
            target="_blank"
            href="https://wa.me/qr/GULDRTKNR4YDN1"
          >
            <FaWhatsapp></FaWhatsapp>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
