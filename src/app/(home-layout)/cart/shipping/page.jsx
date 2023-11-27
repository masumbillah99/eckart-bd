import PaymentInfo from "@/components/Home/Shipping/PaymentInfo/PaymentInfo";
import UserInfo from "@/components/Home/Shipping/UserInfo/UserInfo";

const ShippingPage = async ({ searchParams }) => {
  const { totalPrice, products } = searchParams;
  // console.log(typeof totalPrice);

  return (
    <section className="max-w-screen-xl mx-auto">
      <section className="max-w-screen-xl mx-auto my-10 px-2 md:px-5 xl:px-0 flex flex-col lg:flex-row gap-5">
        <div className="lg:w-3/4">
          {/* user information */}
          <UserInfo />

          {/* payment methods */}
          <PaymentInfo totalPrice={totalPrice} products={products} />
        </div>

        <div className="lg:w-1/4 py-10 px-7 font-semibold flex flex-col gap-5 bg-shadow-round">
          <h1 className="text-xl font-bold">Checkout Summary</h1>
          <hr className="border-dotted bg-black" />
          <p className="flex items-center justify-between gap-5">
            <span>Subtotal</span>
            <span>{totalPrice} Tk.</span>
          </p>
          <hr className="border-dotted bg-black" />
          <p className="flex items-center justify-between gap-5">
            <span>
              Shipping <span className="text-xs">(changeable)</span>
            </span>
            <span>{0} Tk.</span>
          </p>
          <hr className="border-dotted bg-black" />
          <p className="flex items-center justify-between gap-5">
            <span>Total</span>
            <span>{totalPrice} Tk.</span>
          </p>
          <hr className="border-dotted bg-black" />
          <p className="flex items-center justify-between gap-5">
            <span>Payable Total</span>
            <span>{totalPrice} Tk.</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default ShippingPage;
