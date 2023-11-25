"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CartTable = ({
  itemsData,
  setTotalPrice,
  increaseAmount,
  decreaseAmount,
  deleteItemHandler,
}) => {
  const { _id, images, product, company, price, stock } = itemsData;
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const totalPrice = parseFloat(price);
  console.log(totalPrice);

  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("product-cart")) || [];
    const storedCartItem = storedCartItems.find((item) => item._id === _id);
    setCartItems(storedCartItems);

    if (storedCartItem) {
      setQuantity(storedCartItem.quantity);
      const productPrice = parseFloat(storedCartItem.quantity * totalPrice);
      setTotalPrice(productPrice);
    }
  }, [_id, totalPrice, setTotalPrice]);

  const handleIncrease = (_id) => {
    const index = cartItems.findIndex((i) => i._id === _id);
    // const a = cartItems[index];

    if (index !== -1) {
      cartItems[index].quantity += 1;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      const updatedQuantity = quantity + 1;
      setQuantity(updatedQuantity);
      console.log(totalPrice);
      const total = parseFloat(updatedQuantity * totalPrice);
      setTotalPrice(total);
      increaseAmount(total);
    } else {
      console.log("product not found");
    }
  };

  const handleDecrease = (_id) => {
    if (quantity === 1) return;

    const index = cartItems.findIndex((i) => i._id === _id);
    if (index !== -1) {
      cartItems[index].quantity -= 1;
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      const updatedQuantity = quantity - 1;
      setQuantity(updatedQuantity);

      const total = parseFloat(updatedQuantity * totalPrice);
      setTotalPrice(total);
      decreaseAmount(total);
    } else {
      console.log("product not found");
    }
  };

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
                    <span className="text-red-500">
                      only {stock} items available
                    </span>
                  </div>
                </div>
              </td>
              <td className="lg:absolute right-44 top-10 font-semibold">
                <span
                  onClick={() => handleDecrease(_id)}
                  className="border bg-[#F0F0F0] px-3 py-2 cursor-pointer"
                >
                  -
                </span>
                <span className="border bg-white px-3 py-2">{quantity}</span>
                <span
                  onClick={() => handleIncrease(_id)}
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
