"use client";

import CartDetails from "../CartDetails/CartDetails";
import { HiShieldCheck } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useState } from "react";

const CartCompo = ({ products }) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("product-cart")) || [];
    setCarts(storedProducts);
  }, []);

  return (
    <>
      {carts.length > 0 ? (
        <section className="max-w-screen-xl mx-auto my-10 px-2 md:px-5 xl:px-0 flex flex-col lg:flex-row gap-5">
          <div className="lg:w-3/4">
            <CartDetails products={products} />
          </div>
          <div className="lg:w-1/4 h-80 py-10 px-7 font-semibold flex flex-col gap-5 bg-shadow-round">
            <p className="flex items-center gap-5">
              <HiShieldCheck />
              <span>Cash on Delivery Available</span>
            </p>
            <p className="flex items-center gap-5">
              <HiShieldCheck />
              <span>7 Days Replacement Policy</span>
            </p>
            <p className="flex items-center gap-5">
              <HiShieldCheck />
              <span>100% Money Back Guarantee</span>
            </p>
            <p className="flex items-center gap-5">
              <HiShieldCheck />
              <span>Purchase &amp; Earn Points</span>
            </p>
            <p className="flex items-center gap-5">
              <HiShieldCheck />
              <span>100% Original Product</span>
            </p>
          </div>
        </section>
      ) : (
        <section className="bg-base-300 py-10 text-center">
          <div className="max-w-screen-xl mx-auto text-center flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-red-500">
              Your Cart is Empty!
            </h1>
            <p>Please, Add product in cart</p>
            <Link
              href={"/"}
              className="text-blue-500 font-bold text-lg underline"
            >
              Continue to Shopping
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default CartCompo;
