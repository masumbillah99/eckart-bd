"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import CartTable from "../CartTable/CartTable";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import Link from "next/link";

const CartDetails = ({ products }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subtotal, setSubTotal] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product-cart"));
    const addedCartItems = [];
    let subTotalPrice = 0;
    for (const carItem of storedProducts) {
      const product = products.find((item) => item._id === carItem._id);
      if (product) {
        subTotalPrice += parseFloat(product.price) * carItem.quantity;
        addedCartItems.push(product);
      } else {
        console.log("product not found");
      }
    }

    setSubTotal(subTotalPrice);
    setCartItemsData(addedCartItems);
  }, [products]);

  // console.log(cartItemsData);

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItemsData.map((item) => {
      if (item._id === id) {
        const updatedItem = { ...item, quantity: item.quantity + 1 };
        return updatedItem;
      }
      return item;
    });
    console.log(updatedCartItems);
    const updatedSubTotal = updatedCartItems.reduce(
      (total, item) => total + parseFloat(item.price) * item.quantity,
      0
    );
    console.log(updatedSubTotal);

    setCartItemsData(updatedCartItems);
    setSubTotal(updatedSubTotal);
  };

  const deleteItemHandler = (id) => {
    const storedProduct = JSON.parse(localStorage.getItem("product-cart"));
    const filterItem = storedProduct.filter((item) => item._id !== id);
    localStorage.setItem("product-cart", JSON.stringify(filterItem));
    setCartItemsData(filterItem);
  };

  return (
    <>
      <div className="p-5 bg-shadow-round">
        <div className="flex justify-between items-center gap-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="checkbox checkbox-info" />
            <span className="label-text font-semibold">
              Select All ({cartItemsData.length} items)
            </span>
          </label>
          <p className="font-semibold text-lg">
            {user && user?.displayName + ", your"} total:{" "}
            <span className="text-green-500">{subtotal} TK.</span>
          </p>
        </div>
      </div>

      <div className="bg-shadow-round my-5">
        {cartItemsData &&
          cartItemsData?.map((cartData) => (
            <CartTable
              key={cartData._id}
              cartData={cartData}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              deleteItemHandler={deleteItemHandler}
            />
          ))}
      </div>

      <div className="bg-shadow-round my-5 p-5 flex flex-col items-end gap-3">
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
                new: true,
                // products: JSON.stringify(cartItems),
              },
            }}
            className={`flex items-center justify-end gap-2 bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-orange-500 text-white text-right text-lg font-bold px-10 py-2 rounded-md`}
          >
            <span>Place Order</span>
            <HiArrowSmallRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartDetails;
