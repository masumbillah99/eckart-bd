import BgSlider from "@/components/Home/BgSlider/BgSlider";
import Categories from "@/components/Home/Categories/Categories";
import ExploreHome from "@/components/Home/ExploreHome/ExploreHome";
import HatShipping from "@/components/Home/HatShipping";
import BestSellerCollection from "@/components/ProductCollection/BestSellerCollection/BestSellerCollection";
import HotDealsCollection from "@/components/ProductCollection/HotDealsCollection/HotDealsCollection";
import PopularCollection from "@/components/ProductCollection/PopularCollection/PopularCollection";
import TrendingCollection from "@/components/ProductCollection/TrendingCollection/TrendingCollection";

const HomePage = async () => {
  return (
    <>
      <BgSlider />
      <Categories />
      {/* <PopularCollection />
      <HotDealsCollection /> */}
      <ExploreHome />
      {/* <BestSellerCollection />
      <TrendingCollection /> */}
      <HatShipping />
    </>
  );
};

export default HomePage;
