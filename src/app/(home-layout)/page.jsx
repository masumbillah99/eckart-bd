import BgSlider from "@/components/Home/BgSlider/BgSlider";
import Categories from "@/components/Home/Categories/Categories";
import ExploreHome from "@/components/Home/ExploreHome/ExploreHome";
import HatShipping from "@/components/Home/HatShipping";

const HomePage = async () => {
  return (
    <>
      <BgSlider />
      <ExploreHome />
      <HatShipping />
      <Categories />
    </>
  );
};

export default HomePage;
