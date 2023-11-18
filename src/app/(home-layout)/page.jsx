import BgSlider from "@/components/Home/BgSlider/BgSlider";
import CategoriesProduct from "@/components/Home/CategoriesProduct/CategoriesProduct";
import ExploreHome from "@/components/Home/ExploreHome/ExploreHome";
import HatShipping from "@/components/Home/HatShipping";

const HomePage = () => {
  return (
    <>
      <BgSlider />
      <ExploreHome />
      <CategoriesProduct />
      <HatShipping />
    </>
  );
};

export default HomePage;
