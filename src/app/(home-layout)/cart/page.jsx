import { FaHandshake } from "react-icons/fa";
import { getProductFromDb } from "@/utils/productsApis";
import CartDetails from "@/components/Cart/CartDetails/CartDetails";

const CartPage = async () => {
  const products = await getProductFromDb();

  return (
    <section className="max-w-screen-xl mx-auto my-10 px-2 md:px-5 xl:px-0 flex flex-col lg:flex-row gap-5">
      <div className="lg:w-3/4">
        <CartDetails products={products} />
      </div>

      <div className="lg:w-1/4 py-10 px-7 font-semibold flex flex-col gap-5 bg-shadow-round">
        <p className="flex items-center gap-5">
          <FaHandshake />
          <span>Cash on Delivery Available</span>
        </p>
        <p className="flex items-center gap-5">
          <FaHandshake />
          <span>7 Days Replacement Policy</span>
        </p>
        <p className="flex items-center gap-5">
          <FaHandshake />
          <span>100% Money Back Guarantee</span>
        </p>
        <p className="flex items-center gap-5">
          <FaHandshake />
          <span>Purchase &amp; Earn Points</span>
        </p>
        <p className="flex items-center gap-5">
          <FaHandshake />
          <span>100% Original Product</span>
        </p>
      </div>
    </section>
  );
};

export default CartPage;
