import Link from "next/link";

const PaymentFailedPage = ({ params }) => {
  const { transId } = params;

  return (
    <div className="max-w-screen-xl mx-auto my-10 bg-red-500 text-white p-20 text-center">
      <h3 className="text-4xl font-bold leading-tight">
        Your Payment is Failed. Please try again.
      </h3>
      <Link href={"/cart"} className="btn btn-primary px-10 mt-5">
        Go to cart
      </Link>
    </div>
  );
};

export default PaymentFailedPage;
