import { useForm } from "react-hook-form";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="mt-[120px] container mx-auto">
      <h3 className="text-center text-3xl font-bold pt-8">
        অর্ডারটি সম্পন্ন করতে সঠিক তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন।
      </h3>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">আপনার নামঃ</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">আপনার নামঃ</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">আপনার নামঃ</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          {/* text area  */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">অন্যান্য তথ্য</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
            ></textarea>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
