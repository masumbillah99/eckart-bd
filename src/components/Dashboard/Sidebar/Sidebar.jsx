"use client";

import { BsCartCheckFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { IoBagAdd, IoHome } from "react-icons/io5";
import {
  MdDashboard,
  MdShoppingCart,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import { useState } from "react";

const Sidebar = () => {
  const { user, role } = useAuth();
  const [navToggle, setNavToggle] = useState(false);

  console.log(role);

  const adminNavData = [
    { path: "/dashboard", title: "Dashboard", icon: <MdDashboard /> },
    {
      path: "/dashboard/add-product",
      title: "Add Product",
      icon: <IoBagAdd />,
    },
    {
      path: "/dashboard/all-products",
      title: "Manage Products",
      icon: <MdOutlineProductionQuantityLimits />,
    },
    {
      path: "/dashboard/orders",
      title: "Manage Orders",
      icon: <MdOutlineProductionQuantityLimits />,
    },
    {
      path: "/dashboard/all-users",
      title: "Manage Users",
      icon: <HiUsers />,
    },
  ];

  const userNavData = [
    {
      path: "/dashboard/overview",
      title: "Overview",
      icon: <MdDashboard />,
    },
    {
      path: "/dashboard/my-cart",
      title: "Cart Items",
      icon: <MdShoppingCart />,
    },
    {
      path: "/dashboard/my-orders",
      title: "My Orders",
      icon: <BsCartCheckFill />,
    },
    {
      path: "/dashboard/profile",
      title: "My Profile",
      icon: <FaCircleUser />,
    },
  ];

  const commonNavData = [
    {
      path: "/",
      title: "Home",
      icon: <IoHome />,
    },
  ];

  return (
    <section>
      <div className="drawer xl:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-end">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle swap swap-rotate drawer-button fixed top-2 xl:hidden mt-3 me-3"
          >
            <input
              type="checkbox"
              checked={navToggle}
              onChange={() => setNavToggle((pre) => !pre)}
            />
            {/* open icon */}
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            {/* close icon */}
            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>

        {/* sidebar content */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-300 text-base-content text-lg font-semibold">
            {user && role === "admin"
              ? adminNavData?.map(({ path, title, icon }) => (
                  <li key={path}>
                    <NavLink
                      href={path}
                      exact={path === "/dashboard"}
                      activeClassName="text-indigo-800"
                    >
                      {icon} {title}
                    </NavLink>
                  </li>
                ))
              : userNavData?.map(({ path, title, icon }) => (
                  <li key={path}>
                    <Link href={path}>
                      {icon}
                      {title}
                    </Link>
                  </li>
                ))}
            <div className="divider"></div>
            {commonNavData?.map(({ path, title, icon }) => (
              <li key={path}>
                <Link href={path}>
                  {icon}
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
