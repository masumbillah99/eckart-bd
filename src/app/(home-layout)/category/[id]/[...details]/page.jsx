import { getProductDetailsFromDb } from "@/utils/productsApis";

const ProductDetails = async ({ params }) => {
  const [id] = params.details;
  const details = await getProductDetailsFromDb(id);
  // console.log(details);

  return (
    <section>
      Singer Top Mount Refrigerator | 231 Ltr | Red | SRREF-SS500-FTDS230Z-RG
    </section>
  );
};

export default ProductDetails;
