'use client';

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MyOrdersPage = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER}/user-orders?email=${user?.email}`,
        {
          cache: "no-cache",
        }
      );
      const data = response.json();
      console.log(data);
    }
    fetchOrders();
  }, [user]);

  return (
    <section className="md:ml-10 mt-3">
      <h3 className="text-2xl font-bold mb-5">My Orders</h3>

      {/* a table including order information */}
      <div className="bg-gray-100 rounded-lg p-5">
        {orders && orders?.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center gap-3">
            {orders?.map(({ _id, product, price }) => (
              <div
                key={_id}
                className="card w-96 bg-base-100 shadow-xl shadow-gray-300"
              >
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p>
                    Product Name:
                    <span className="badge badge-warning ml-2">{}</span>
                  </p>
                  <p>
                    Product Price:
                    <span className="badge badge-warning ml-2">$ {}</span>
                  </p>
                  <p>
                    Product Id:
                    <span className="badge badge-warning ml-2">{}</span>
                  </p>
                  <p>
                    Status:
                    <span className="badge badge-warning ml-2">{}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-2/3 py-10 mx-auto text-center">
            <p className="text-xl font-bold mb-5">
              You don&apos;t buy any product yet. Please go to -
            </p>
            <Link className="btn btn-primary" to={`/cart`}>
              My Cart
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyOrdersPage;
