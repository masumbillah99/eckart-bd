import { getProductsByCategory } from "@/utils/productsApis";
import SingleCategory from "./SingleCategory";
const CategoryProductPage = async ({ params }) => {
  const products = await getProductsByCategory(params.id);
  // console.log(products);

  return (
    <section className="max-w-screen-xl mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-items-center">
        {products &&
          products?.map((product) => (
            <SingleCategory
              key={product._id}
              productData={product}
              path={params.id}
            />
          ))}
      </div>
    </section>
  );
};

export default CategoryProductPage;
