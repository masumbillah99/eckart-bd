"use client";
import Link from "next/link";
import { useEffect } from "react";

const PaymentSuccessPage = ({ params }) => {
  const { transId } = params;

  useEffect(() => {
    localStorage.removeItem("product-cart");
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10 bg-base-200 p-20 text-success text-center text-5xl font-bold leading-tight">
      <h3 className="text-5xl font-bold leading-tight">
        Payment Success : {transId}
      </h3>
      <Link
        href={"/dashboard/my-orders"}
        className="btn btn-success px-10 mt-3"
      >
        See Your Orders
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
