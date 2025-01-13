import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Checkout = () => {
  const [quantityCounter, setQuantityCounter] = useState(1);
  const [productPrice, setProductPrice] = useState(1000);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "অর্ডার সম্পন্ন হয়েছে।",
      showConfirmButton: false,
      timer: 1500,
    });
    reset();
    navigate("/thankYou");
    console.log(data);
  };

  // quantity Controller
  const quantityController = (action) => {
    let newQuantity = quantityCounter;
    if (action === "-") {
      if (quantityCounter > 1) {
        newQuantity = quantityCounter - 1;
      } else {
        toast.error("পন্যের সংখ্যা ১ এর থেকে কম হবে না।");
      }
    } else {
      newQuantity = quantityCounter + 1;
    }
    setQuantityCounter(newQuantity);
    setProductPrice(newQuantity * 1000);
  };

  return (
    <div className="mt-[120px] container mx-auto">
      <h3 className="text-center text-3xl font-bold pt-12">
        অর্ডারটি সম্পন্ন করতে সঠিক তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন।
      </h3>
      <p className="text-sm text-red-600 text-center my-6">
        (লাল * চিহ্ন দেয়া তথ্যগুলো প্রদান করা বাধ্যতামূলক)
      </p>
      <div className="my-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border p-8 rounded-lg">
            {/* input form  */}
            <div className="border p-4 border-dashed rounded-lg">
              <h3 className="text-2xl text-center font-bold">আপনার তথ্য</h3>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">
                    আপনার নামঃ<span className="text-red-600 text-lg">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="এখানে আপনার নাম লিখুন-"
                  className="input input-bordered w-full "
                  {...register("fullName", { required: true })}
                />
                {errors.fullName?.type === "required" && (
                  <p className="text-red-600 text-sm ms-3 mt-2">
                    নাম প্রদান করা বাধ্যতামূলক।
                  </p>
                )}
                {/* {errors.exampleRequired && <span>This field is required</span>} */}
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">
                    আপনার ফোন নাম্বারঃ
                    <span className="text-red-600 text-lg">*</span>
                  </span>
                </div>
                <input
                  type="number"
                  placeholder="এখানে আপনার ফোন নাম্বার লিখুন-"
                  className="input input-bordered w-full"
                  {...register("phoneNumber", {
                    required: "নাম্বার প্রদান করা বাধ্যতামূলক।",
                    minLength: {
                      value: 11,
                      message: "নাম্বার অবশ্যই ১১ সংখ্যার হতে হবে।",
                    },
                    maxLength: {
                      value: 11,
                      message: "নাম্বার অবশ্যই ১১ সংখ্যার হতে হবে।",
                    },
                    pattern: {
                      value: /^01\d{9}$/,
                      message: "নাম্বার অবশ্যই ০১ দিয়ে শুরু হতে হবে।",
                    },
                  })}
                />
                {errors.phoneNumber && (
                  <p className="text-red-600 text-sm ms-3 mt-2">
                    {errors.phoneNumber.message}
                  </p>
                )}
                {/* {errors.phoneNumber?.type === "required" && (
                  <p className="text-red-600 text-sm ms-3 mt-2">
                    নাম্বার প্রদান করা বাধ্যতামূলক।
                  </p>
                )} */}
              </label>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">
                    আপনার পূর্ণাঙ্গ ঠিকানাঃ
                    <span className="text-red-600 text-lg">*</span>
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="এখানে আপনার ঠিকানা লিখুন-"
                  className="input input-bordered w-full "
                  {...register("address", { required: true })}
                />
                {errors.address?.type === "required" && (
                  <p className="text-red-600 text-sm ms-3 mt-2">
                    ঠিকানা প্রদান করা বাধ্যতামূলক।
                  </p>
                )}
              </label>
              {/* text area  */}
              <label className="form-control">
                <div className="label">
                  <span className="label-text">অন্যান্য তথ্যঃ</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="স্পেশাল কোন নোট লিখতে চাইলে এখানে লিখুন-"
                  {...register("specialInfo", { required: false })}
                ></textarea>
              </label>
            </div>

            {/* fixed info  */}
            <div className="border p-4 border-dashed rounded-lg">
              <h3 className="text-2xl text-center font-bold mb-8">
                পন্যের বিবরণ
              </h3>
              <div>
                {/* quantity  */}
                <div className="flex items-center gap-4">
                  <h5>পন্যের সংখ্যাঃ </h5>
                  <p
                    onClick={() => quantityController("-")}
                    className="p-2 border-2 cursor-pointer"
                  >
                    <FaMinus></FaMinus>
                  </p>
                  <p className="text-lg font-semibold">{quantityCounter}</p>
                  <p
                    onClick={() => quantityController("+")}
                    className="p-2 border-2 cursor-pointer"
                  >
                    <FaPlus></FaPlus>
                  </p>
                </div>

                {/* shipping charge  */}
                <div className="overflow-x-auto mt-8">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>পন্যের নাম</th>
                        <th>দাম</th>
                        <th>সংখ্যা</th>
                        <th>মোট দাম</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <td className="font-bold">অরণ্য ডায়া শিফা</td>
                        <td className="font-bold">
                          <span className="flex gap-1">
                            <FaBangladeshiTakaSign></FaBangladeshiTakaSign>1000
                          </span>
                        </td>
                        <td className="font-bold">{quantityCounter}</td>
                        <td className="font-bold">
                          <span className="flex gap-1">
                            <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                            {productPrice}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="overflow-x-auto mt-8">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>ডেলিভারি চার্জ</th>
                        <th>সর্বমোট দাম</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <td className=" text-red-600">
                          (সারাদেশে ফ্রি ডেলিভারি)
                        </td>
                        <td>
                          <span className="flex gap-1">
                            <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                            {productPrice}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h2 className="text-center my-8 text-2xl text-red-600">
                পন্য হাতে পেয়ে মূল্য পরিশোধ করুন।
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="btn my-4 bg-primary_color hover:bg-primary_color_hover text-white text-lg px-6 py-2 w-full">
              অর্ডার সম্পন্ন করুন
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
