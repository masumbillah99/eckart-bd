"use client";

import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import CartTable from "../CartTable/CartTable";

const CartDetails = ({ products }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCartItems =
      JSON.parse(localStorage.getItem("product-cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    const addedCartItems = [];
    let subTotalPrice = 0;
    for (const carItem of cartItems) {
      const product = products.find((item) => item._id === carItem._id);
      if (product) {
        subTotalPrice += parseFloat(product.price) * carItem.quantity;
        addedCartItems.push(product);
      } else {
        console.log("product not found");
      }
    }

    setTotalPrice(subTotalPrice);
    setCartItemsData(addedCartItems);

    // const cartItemsId = cartItems.map((cartItem) => cartItem._id);
    // const cartItemsQuantity = cartItems.map((cartItem) => cartItem.quantity);
    // for (let i = 0; i < cartItemsId.length; i++) {
    //   const id = cartItemsId[i];
    //   const quantity = cartItemsQuantity[i];
    //   const product = products.find((item) => item._id === id);
    //   if (product) {
    //     addedCartItems.push(product);
    //     subTotalPrice += parseFloat(product.price) * quantity;
    //   } else {
    //     console.log("product not found");
    //   }
    // }
    // setCartItems(storedCartItems);
  }, [cartItems, products]);

  // console.log(totalPrice);

  const increaseAmount = (price) => {
    setTotalPrice(parseFloat(totalPrice + price));
  };

  const decreaseAmount = (price) => {
    setTotalPrice(parseFloat(totalPrice - price));
  };

  const deleteItemHandler = (id) => {
    console.log(id);
  };

  // console.log(totalPrice);

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
            <span className="text-green-500">{totalPrice} TK.</span>
          </p>
        </div>
      </div>

      <div className="bg-shadow-round my-5">
        {cartItemsData?.map((itemsData) => (
          <CartTable
            key={itemsData._id}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            itemsData={itemsData}
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
