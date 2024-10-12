import AllfoodSection from "../../components/AllfoodSection";
import Category from "./Category/Category";

import SliderBanner from "./SliderBanner/SliderBanner";

const Home = () => {
  return (
    <>
      <div>
        <SliderBanner />
        <Category />
        <AllfoodSection />
      </div>
    </>
  );
};

export default Home;
