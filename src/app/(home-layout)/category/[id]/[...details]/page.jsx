import ProductDescription from "@/components/Home/ProductDetails/ProductDescription";
import ProductDetails from "@/components/Home/ProductDetails/ProductDetails";
import ProductImage from "@/components/Home/ProductDetails/ProductImage";
import { getProductDetailsFromDb } from "@/utils/productsApis";

const ProductDetailsPage = async ({ params }) => {
  // console.log(params);
  const [id] = params?.details;
  const productDetails = await getProductDetailsFromDb(id);

  return (
    <section className="max-w-screen-2xl mx-auto my-10 bg-base-100 rounded-lg">
      <div class="flex flex-col gap-10">
        <div className="lg:flex gap-20 shadow-lg md:border p-12">
          {/* image part */}
          <ProductImage productDetails={productDetails} />

          {/* details part */}
          <ProductDetails productDetails={productDetails} />
        </div>

        {/* description & Review part */}
        <ProductDescription productDetails={productDetails} />
      </div>
    </section>
  );
};

export default ProductDetailsPage;
