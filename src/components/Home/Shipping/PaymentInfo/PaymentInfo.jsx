"use client";

import Image from "next/image";
import Link from "next/link";
import { paymentMethodData } from "@/data/paymentMethodData";
import { useEffect, useState } from "react";

const PaymentInfo = ({}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
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
      <div className="grid grid-cols-2 justify-between items-center gap-5 mt-5">
        {paymentMethodData &&
          paymentMethodData.map(({ logo, name }) => (
            <div
              key={name}
              className="flex items-center gap-3 bg-base-200 py-2 px-5 cursor-pointer"
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

        {/* <div className="flex items-center gap-3 bg-base-200 py-4 px-5">
          <input type="radio" className="w-5 h-5" />
          <div>
            <Image
              className="w-20"
              src={visaCard}
              width={100}
              height={100}
              alt=""
            />
            <span className="text-sm">Pay from your card account</span>
          </div>
        </div> */}
      </div>
      <hr className="bg-black border-dotted my-10" />
      <div className="mb-5 text-right">
        <Link
          href={{
            pathname: `/cart/shipping/payment`,
          }}
        >
          <button
            className={`bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-orange-500 text-white text-right text-lg font-bold px-10 py-3 rounded-md disabled:cursor-default`}
            disabled={selectedOption === null}
          >
            Confirm Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentInfo;
