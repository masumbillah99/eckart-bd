"use client";

import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import { MdOutlineShoppingCart, MdPayments, MdDiscount } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

  // const chartData = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  // ];

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
        <div className="flex items-center justify-between py-3 px-10 w-80 bg-gradient-to-r from-[#D66DED] to-[#8C64F8] bg-shadow-round">
          <p className="form-control gap-3">
            <span className="text-xl font-semibold">{cart?.length || 0}</span>
            <span className="font-medium">Total Cart Products</span>
          </p>
          <MdOutlineShoppingCart className="w-12 h-12 text-white" />
        </div>
        <div className="flex items-center justify-between py-3 px-10 w-80 bg-gradient-to-r from-[#548AEA] to-[#22D7DC] bg-shadow-round">
          <p className="form-control gap-3">
            <span className="text-xl font-semibold">0</span>
            <span className="font-medium">Total Bonus</span>
          </p>
          <MdDiscount className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* a graph with activity */}
      <div className="mt-7">
        <h5 className="text-xl font-bold">Your Impression</h5>
        <div className="my-10 flex items-center justify-between">
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          <div className="">
            <LineChart
              width={800}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#82ca9d"
                strokeDasharray="3 4 5 2"
              />
            </LineChart>
          </div>
          <div className="w-[300px] flex items-center gap-5">
            <div
              className="radial-progress text-primary"
              style={{ "--value": 77 }}
              role="progressbar"
            >
              77%
            </div>
            <div
              className="radial-progress text-primary border-2"
              style={{ "--value": 21 }}
              role="progressbar"
            >
              21%
            </div>
          </div>
        </div>
        {/* </ResponsiveContainer> */}
      </div>
    </section>
  );
};

export default UserOverviewPage;
