import { getProductCategories } from "@/utils/categoriesApi";
import Image from "next/image";

const CategoriesProduct = async () => {
  const categories = await getProductCategories();

  return (
    <section className="max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-10">Product Categories</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {categories &&
          categories?.map((category) => (
            <div
              key={category?._id}
              className="flex flex-col items-center gap-3 hover:text-blue-500"
            >
              <Image
                src={category?.imgUrl}
                className="w-32 h-32 lg:w-40 lg:h-40 border-2 p-3 rounded-full cursor-pointer"
                alt="product-img"
                width={200}
                height={200}
              />
              <p className="font-semibold cursor-pointer">{category?.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CategoriesProduct;
