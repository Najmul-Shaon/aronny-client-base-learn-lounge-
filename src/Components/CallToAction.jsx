const CallToAction = () => {
  return (
    <div className="bg-primary_color text-white py-12 my-24 rounded-2xl">
      <div className="text-center">
        <h2>Call Us</h2>
        <p className="text-lg py-4">
          Subscribe for updates and exclusive discounts.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          class="input input-bordered w-1/2 max-w-xs text-gray-900"
        ></input>
        <button className="btn btn-warning text-white ml-2">Subscribe</button>
      </div>
    </div>
  );
};

export default CallToAction;
