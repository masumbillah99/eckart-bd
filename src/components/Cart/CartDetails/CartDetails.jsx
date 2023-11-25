"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import CartTable from "../CartTable/CartTable";

const CartDetails = ({ products }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  //   console.log(products);

  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("product-cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    const cartItemsId = cartItems.map((cartItem) => cartItem._id);
    const cartItemsQuantity = cartItems.map((cartItem) => cartItem.quantity);
    const addedCartItems = [];
    let subTotalPrice = 0;

    for (let i = 0; i < cartItemsId.length; i++) {
      const id = cartItemsId[i];
      const quantity = cartItemsQuantity[i];
      const cartItem = products.find((item) => item._id === id);
      if (cartItem) {
        addedCartItems.push(cartItem);
        subTotalPrice += parseFloat(cartItem.price) * quantity;
      } else {
        console.log("product not found");
      }
    }

    setTotalPrice(subTotalPrice);
    setCartItemsData(addedCartItems);
  }, [cartItems, products]);

  console.log(totalPrice);

  const increaseAmount = (price) => {
    setTotalPrice(parseFloat(totalPrice + price));
  };

  const decreaseAmount = (price) => {
    setTotalPrice(parseFloat(totalPrice - price));
  };

  const deleteItemHandler = (id) => {
    console.log(id);
  };

  return (
    <>
      <div className="p-5 bg-shadow-round">
        <div className="flex justify-between items-center gap-3">
          <label className="flex items-center gap-3">
            <input type="checkbox" className="checkbox checkbox-info" />
            <span className="label-text font-semibold">
              Select All ({cartItems.length} items)
            </span>
          </label>
          <p className="font-semibold text-lg">
            {user && user?.displayName + ", your"} total:{" "}
            <span className="text-green-500">{totalPrice} TK.</span>
          </p>
        </div>
      </div>

      <div className="bg-shadow-round my-5">
        {cartItemsData?.map((itemsData) => (
          <CartTable
            key={itemsData._id}
            setTotalPrice={setTotalPrice}
            itemsData={itemsData}
            totalPrice={totalPrice}
            increaseAmount={increaseAmount}
            decreaseAmount={decreaseAmount}
            deleteItemHandler={deleteItemHandler}
          />
        ))}
      </div>
    </>
  );
};

export default CartDetails;
