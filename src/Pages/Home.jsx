import Banner from "../Components/Banner";
import CallToAction from "../Components/CallToAction";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <Products></Products>
      <CallToAction></CallToAction>
      {/* <Features></Features> */}
      {/* <StudyCard></StudyCard> */}
      {/* <FAQ></FAQ> */}
    </div>
  );
};

export default Home;
