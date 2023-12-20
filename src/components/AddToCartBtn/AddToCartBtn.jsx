"use client";

import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";

const AddToCartBtn = ({ _id, textSize, padding, isTrue }) => {
  const addToCart = (id) => {
    const cartItems = JSON.parse(localStorage.getItem("product-cart")) || [];
    const existItemIndex = cartItems.findIndex((item) => item._id === id);
    if (existItemIndex !== -1) {
      toast("Already bookmarked! Go to Cart");
      return;
    } else {
      const newItem = { _id: id, quantity: 1 };
      const updatedCartItems = [...cartItems, newItem];
      // console.log(updatedCartItems)
      localStorage.setItem("product-cart", JSON.stringify(updatedCartItems));
      toast.success("Product added in cart");
    }
  };

  return (
    <>
      {isTrue ? (
        <button
          onClick={() => addToCart(_id)}
          className={`flex items-center justify-center gap-5 w-full text-white ${textSize} ${padding} rounded-md`}
        >
          <FaShoppingCart /> <span>Add to Cart</span>
        </button>
      ) : (
        <button
          onClick={() => addToCart(_id)}
          className={`flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white ${textSize} ${padding} rounded-md`}
        >
          <FaShoppingCart /> <span>Add to Cart</span>
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
