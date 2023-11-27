"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdDelete, MdFavoriteBorder } from "react-icons/md";

const CartTable = ({
  cartData,
  quantity,
  increaseQuantity,
  deleteItemHandler,
}) => {
  // console.log(cartData);
  const { _id, images, product, company, price, stock } = cartData;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody>
            <tr className="">
              <td className="w-10">
                <label>
                  <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                </label>
              </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-24 h-24">
                      <Image src={images[0]} width={100} height={100} alt="" />
                    </div>
                  </div>
                  <div className="">
                    <div className="font-bold">{product.title}</div>
                    <div className="text-gray-600">{company.brand}</div>
                    <div className="text-red-500">
                      only {stock} items available
                    </div>
                    <div className="text-2xl pt-1">
                      <button onClick={() => deleteItemHandler(_id)}>
                        <MdDelete />
                      </button>
                      <button className="hover:text-blue-500 ml-3">
                        <MdFavoriteBorder />
                      </button>
                    </div>
                  </div>
                </div>
              </td>
              <td className="lg:absolute right-44 top-10 font-semibold">
                <span
                  // onClick={() => handleDecrease(_id)}
                  className="border bg-[#F0F0F0] px-3 py-2 cursor-pointer"
                >
                  -
                </span>
                <span className="border bg-white px-3 py-2">{quantity}</span>
                <span
                  onClick={() => {
                    increaseQuantity(_id);
                  }}
                  className="border bg-[#F0F0F0] px-3 py-2 cursor-pointer"
                >
                  +
                </span>
              </td>
              <td className="lg:absolute right-5 top-10 font-bold">
                {price} Tk.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartTable;
