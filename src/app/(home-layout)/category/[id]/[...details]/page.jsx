import ProductDetails from "@/components/Home/ProductDetails/ProductDetails";
import ProductImage from "@/components/Home/ProductDetails/ProductImage";
import { getProductDetailsFromDb } from "@/utils/productsApis";

const ProductDetailsPage = async ({ params }) => {
  // console.log(params);
  const [id] = params?.details;
  const productDetails = await getProductDetailsFromDb(id);

  return (
    <section className="max-w-screen-2xl mx-auto md:border-t my-10 px-10 bg-base-100 shadow-lg">
      <div class="grid grid-cols-1 lg:grid-cols-5 lg:col-gap-12 xl:col-gap-16 gap-12 lg:gap-16 mt-8 lg:mt-12">
        {/* image part */}
        <ProductImage productDetails={productDetails} />

        {/* details part */}
        <ProductDetails productDetails={productDetails} />

        {/* description & Review part */}
      </div>
    </section>
  );
};

export default ProductDetailsPage;
