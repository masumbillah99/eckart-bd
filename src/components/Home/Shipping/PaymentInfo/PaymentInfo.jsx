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
        <p>Name: {user?.displayName}</p>
        <p className="my-2">Email: {user?.email}</p>
        <div className="form-control flex-row items-center">
          <label htmlFor="address">Your Address: </label>
          <input
            type="name"
            id="address"
            className="w-1/3 ml-2 input input-bordered focus:outline-none"
            placeholder="enter your address"
            onBlur={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-control flex-row items-center my-2">
          <label htmlFor="">Select Currency: </label>
          <select
            name="currency"
            className="select select-info w-full max-w-xs ml-2 focus:outline-none"
            onBlur={(e) => setCurrency(e.target.value)}
            required
          >
            <option value={"BDT"}>BDT</option>
            <option value={"USD"}>USD</option>
          </select>
        </div>
      </div>

      {/* payment methods */}
      <div className="p-5 bg-shadow-round">
        <h3 className="text-lg font-semibold text-gray-600">
          Payment Method{" "}
          <span
            className={`text-sm font-normal ${
              selectedOption === null ? "text-red-500" : "text-black"
            }`}
          >
            (Please select only one! payment method)
          </span>
        </h3>
        <hr className="bg-black border-dotted my-3" />
        <div className="grid md:grid-cols-2 justify-between items-center gap-5 mt-5">
          {paymentMethodData &&
            paymentMethodData.map(({ logo, name }) => (
              <div
                key={name}
                className={`flex items-center gap-3 bg-base-200 py-2 px-5 ${
                  selectedOption === name
                    ? "border border-orange-500"
                    : "border-none"
                } transition cursor-pointer`}
                onClick={() => handleOptionClick(name)}
              >
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  checked={selectedOption === name}
                  readOnly
                />
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
            disabled={selectedOption === null}
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
