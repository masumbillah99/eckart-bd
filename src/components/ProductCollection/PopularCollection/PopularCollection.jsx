import { FaFire } from "react-icons/fa";
import { popularProductCollection } from "@/utils/allProductsCollection";
import CollectionSlider from "@/components/ProductCollection/CollectionSlider/CollectionSlider";

const PopularCollection = async () => {
  const popularProducts = await popularProductCollection();

  return (
    <section className="max-w-screen-xl mx-auto my-20">
      <h1 className="text-2xl text-gray-700 font-bold flex items-center gap-2 mb-5">
        Popular Collection <FaFire className="text-red-500" />
      </h1>

      {/* slider category */}

      <>
        <CollectionSlider products={popularProducts} />
      </>
    </section>
  );
};

export default PopularCollection;
