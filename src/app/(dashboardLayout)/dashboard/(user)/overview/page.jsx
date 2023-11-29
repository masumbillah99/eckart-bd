"use client";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineShoppingCart, MdPayments } from "react-icons/md";

const UserOverviewPage = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product-cart"));
    setCart(storedProducts);
  }, []);

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/user-orders?email=${user?.email}`,
      {
        cache: "no-cache",
      }
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);

  // console.log(orders?.length);

  return (
    <section className="md:ml-10 mt-3">
      <h3 className="text-2xl font-bold mb-5">Overview</h3>

      {/* 3 box */}
      <div className="max-w-screen-xl mt-10 lg:mt-0 grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-5">
        <div className="flex items-center justify-between py-3 px-10 w-80 bg-gradient-to-r from-[#22D7DC] to-[#548AEA] bg-shadow-round">
          <p className="form-control gap-3">
            <span className="text-xl font-semibold">{orders?.length || 0}</span>
            <span className="font-medium">Total Orders</span>
          </p>
          <MdPayments className="w-12 h-12 text-white" />
        </div>
        <div className="flex items-center justify-between py-3 px-10 w-80 bg-gradient-to-r from-[#22D7DC] to-[#548AEA] bg-shadow-round">
          <p className="form-control gap-3">
            <span className="text-xl font-semibold">{cart?.length || 0}</span>
            <span className="font-medium">Total Cart Products</span>
          </p>
          <MdOutlineShoppingCart className="w-12 h-12 text-white" />
        </div>
        <div className="flex items-center justify-between py-3 px-10 w-80 bg-gradient-to-r from-[#22D7DC] to-[#548AEA] bg-shadow-round">
          <p className="form-control gap-3">
            <span className="text-xl font-semibold">0</span>
            <span className="font-medium">Total Bonus</span>
          </p>
          <MdOutlineShoppingCart className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* a graph with activity */}
      <div className="mt-7">
        <h5 className="text-xl font-bold">Your Impression</h5>
      </div>
    </section>
  );
};

export default UserOverviewPage;
