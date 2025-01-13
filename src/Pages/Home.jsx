import Banner from "../Components/Banner";
import CallToAction from "../Components/CallToAction";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div className="container mx-auto p-2 md:p-0">
      <Banner></Banner>
      <Products></Products>
      <CallToAction></CallToAction>
    </div>
  );
};

export default Home;
