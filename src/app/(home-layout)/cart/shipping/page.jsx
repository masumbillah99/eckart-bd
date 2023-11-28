import PaymentInfo from "@/components/Home/Shipping/PaymentInfo/PaymentInfo";

const ShippingPage = async ({ searchParams }) => {
  return (
    <section className="max-w-screen-xl mx-auto">
      <section className="max-w-screen-xl mx-auto my-10 px-2 md:px-5 xl:px-0 flex flex-col-reverse lg:flex-row gap-5">
        <div className="lg:w-3/4">
          <PaymentInfo searchParams={searchParams} />
        </div>

        <div className="lg:w-1/4 py-10 px-7 font-semibold flex flex-col gap-5 bg-shadow-round">
          <h1 className="text-xl font-bold">Checkout Summary</h1>
          <hr className="border-dotted bg-black" />
          <p className="flex items-center justify-between gap-5">
            <span>Subtotal</span>
            <span>{searchParams.totalPrice} Tk.</span>
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
            <span>{searchParams.totalPrice} Tk.</span>
          </p>
          <hr className="border-dotted bg-black" />
          <p className="flex items-center justify-between gap-5">
            <span>Payable Total</span>
            <span>{searchParams.totalPrice} Tk.</span>
          </p>
        </div>
      </section>
    </section>
  );
};

export default ShippingPage;
