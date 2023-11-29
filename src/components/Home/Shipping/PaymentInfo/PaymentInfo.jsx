"use client";

import Image from "next/image";
import Link from "next/link";
import { paymentMethodData } from "@/data/paymentMethodData";
import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import StripeModal from "@/components/Modal/StripeModal/StripeModal";

const PaymentInfo = ({ searchParams }) => {
  const { user } = useAuth();
  const { totalPrice, products } = searchParams;
  const cartProducts = JSON.parse(products);
  const [address, setAddress] = useState("");
  const [currency, setCurrency] = useState("BDT");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const sslConfirmOrder = () => {
    const productIds = cartProducts?.map((product) => product._id);

    const orderData = {
      productIds: productIds,
      totalPrice,
      quantity,
      currency,
      orderStatus: "pending",
      consumerInfo: {
        name: user?.displayName,
        email: user?.email,
        address: address,
      },
    };

    fetch(`${process.env.NEXT_PUBLIC_SERVER}/payment-request`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
      });
  };

  // const visaConfirmOrder = () => {
  //   const productIds = cartProducts?.map((product) => product._id);

  //   const orderData = {
  //     productIds: productIds,
  //     totalPrice,
  //     quantity,
  //     currency,
  //     orderStatus: "pending",
  //     consumerInfo: {
  //       name: user?.displayName,
  //       email: user?.email,
  //       address: address,
  //     },
  //   };

  //   fetch(`${process.env.NEXT_PUBLIC_SERVER}/payment-request`, {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify(orderData),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       window.location.replace(result.url);
  //     });
  // };

  return (
    <>
      {/* user information */}
      <div className="bg-shadow-round p-5 mb-10">
        <h3 className="text-lg font-semibold">User Information</h3>
        <hr className="bg-black border-dotted my-3" />

        <div className="md:mx-5">
          <div className="flex items-center gap-10">
            <label htmlFor="name" className="font-semibold">
              Name:{" "}
            </label>
            <input
              type="text"
              className="w-3/4 input input-info input-bordered focus:outline-none"
              value={user?.displayName}
              readOnly
            />
          </div>

          <div className="flex items-center gap-10 my-3">
            <label htmlFor="email" className="font-semibold">
              Email:{" "}
            </label>
            <input
              type="text"
              className="w-3/4 input input-info input-bordered focus:outline-none"
              value={user?.email}
              readOnly
            />
          </div>

          <div className="flex items-center gap-5">
            <label htmlFor="address" className="font-semibold">
              Address:{" "}
            </label>
            <input
              type="text"
              className="w-3/4 input input-info input-bordered focus:outline-none"
              placeholder="enter your address"
              onBlur={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center my-3">
            <label htmlFor="currency" className="font-semibold">
              Select Currency:{" "}
            </label>
            <select
              name="currency"
              className="select select-info w-3/4  ml-2 focus:outline-none"
              onBlur={(e) => setCurrency(e.target.value)}
              required
            >
              <option value={"BDT"}>BDT</option>
              <option value={"USD"}>USD</option>
            </select>
          </div>
        </div>
      </div>

      {/* payment methods */}
      <div className="p-5 bg-shadow-round">
        <h3 className="text-lg font-semibold text-gray-600">
          Payment Methods{" "}
          <span
            className={`text-sm font-normal`}
            // ${selectedOption === null ? "text-red-500" : "text-black"}
          >
            (All payment methods)
            {/* (Please select only one! payment method) */}
          </span>
        </h3>
        <hr className="bg-black border-dotted my-3" />
        <div className="grid md:grid-cols-2 lg:justify-between items-center gap-5 mt-5">
          {paymentMethodData &&
            paymentMethodData.map(({ logo, name }) => (
              <div
                key={name}
                className={`bg-base-200 py-2 px-5 transition`}
                // ${selectedOption === name ? "border border-orange-500": "border-none"}
                // onClick={() => handleOptionClick(name)}
              >
                {/* <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  checked={selectedOption === name}
                  readOnly
                /> */}
                <div>
                  <Image
                    className="w-20 h-10"
                    src={logo}
                    width={100}
                    height={100}
                    alt=""
                  />
                  <span className="text-sm">Pay from your {name} account</span>
                </div>
              </div>
            ))}
        </div>

        <hr className="bg-black border-dotted my-10" />

        <div className="mb-5 text-right">
          <button
            className={`bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-orange-500 text-white text-right text-lg font-bold px-10 py-3 rounded-md disabled:cursor-default`}
            onClick={sslConfirmOrder}
            // disabled={selectedOption === null}
          >
            Confirm Order
          </button>
        </div>

        {/* <StripeModal
          isOpen={isOpen}
          openModal={openModal}
          closeModal={closeModal}
          cartProducts={cartProducts}
          totalPrice={totalPrice}
          currency={currency}
          address={address}
        /> */}
      </div>
    </>
  );
};

export default PaymentInfo;
