"use client";

import Image from "next/image";
import { useState } from "react";
import { MdDelete, MdFavoriteBorder } from "react-icons/md";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

const CartTable = ({
  cartData,
  subtotal,
  setSubTotal,
  countTotalAmount,
  minusTotalAmount,
  deleteItemHandler,
}) => {
  const { _id, images, product, company, price, stock } = cartData;
  const [quantity, setQuantity] = useState(1);
  // console.log(images);

  const increaseQuantity = (id) => {
    const storedItems = JSON.parse(localStorage.getItem("product-cart")) || [];
    const index = storedItems.findIndex((item) => item._id === id);
    if (index !== -1) {
      storedItems[index].quantity += 1;
      localStorage.setItem("product-cart", JSON.stringify(storedItems));
      const updatedQty = quantity + 1;
      setQuantity(updatedQty);
      const updatedSubTotal = parseFloat(price) * updatedQty;
      setSubTotal(updatedSubTotal);
      countTotalAmount(price);
    }

    // const filterItem = storedItems.find((item) => item._id === id);
    // if (filterItem) {
    //   const updatedQty = quantity + 1;
    //   const updatedSubTotal = parseFloat(price) * updatedQty;
    //   setQuantity(updatedQty);
    //   console.log(updatedSubTotal);
    //   setSubTotal(updatedSubTotal);
    //   countTotalAmount(updatedSubTotal);
    // }
  };

  const decreaseQuantity = (id) => {
    if (quantity === 1) return;
    const storedItems = JSON.parse(localStorage.getItem("product-cart")) || [];
    const index = storedItems.findIndex((item) => item._id === id);
    if (index !== -1) {
      storedItems[index].quantity -= 1;
      localStorage.setItem("product-cart", JSON.stringify(storedItems));
      const updatedQty = quantity - 1;
      setQuantity(updatedQty);
      const updatedSubTotal = parseFloat(price) * updatedQty;
      setSubTotal(updatedSubTotal);
      minusTotalAmount(price);
    }
  };

  return (
    <div className="bg-shadow-round my-5">
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
                  onClick={() => decreaseQuantity(_id)}
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

      {/* place order */}
      {/* <div className="bg-shadow-round my-5 p-5 flex flex-col items-end gap-3">
        <p>Apply Promo Code or Voucher Code on the Shipping Page</p>
        <p className="text-red-500">Please select one or more products</p>
        <div className="flex items-center gap-7">
          <Link
            href={`/`}
            className={`flex items-center justify-end gap-2 bg-gradient-to-r from-indigo-400 to-indigo-500 hover:bg-orange-500 text-white text-right text-lg font-bold px-10 py-2 rounded-md`}
          >
            <HiArrowSmallLeft />
            <span>Order More</span>
          </Link>
          <Link
            href={{
              pathname: `/cart/shipping`,
              query: {
                productId: _id,
                total: subtotal,
              },
            }}
            className={`flex items-center justify-end gap-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-orange-500 text-white text-right text-lg font-bold px-10 py-2 rounded-md`}
          >
            <span>Place Order</span>
            <HiArrowSmallRight />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default CartTable;
