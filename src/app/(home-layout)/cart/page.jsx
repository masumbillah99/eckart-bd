import { getProductFromDb } from "@/utils/productsApis";
import CartCompo from "@/components/Cart/CartCompo/CartCompo";

const CartPage = async () => {
  const products = await getProductFromDb();

  return (
    <section>
      <CartCompo products={products} />
    </section>
  );
};

export default CartPage;
