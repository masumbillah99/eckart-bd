"use client";
import Link from "next/link";
import { useEffect } from "react";

const PaymentSuccessPage = ({ params }) => {
  const { transId } = params;

  useEffect(() => {
    localStorage.removeItem("product-cart");
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-10 bg-base-200 p-20 text-green-500 text-center text-5xl font-bold leading-tight">
      <h3 className="text-5xl font-bold leading-tight">
        Your Payment is successful
      </h3>
      <p className="text-3xl text-info mt-3">Transaction Id : {transId}</p>
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
