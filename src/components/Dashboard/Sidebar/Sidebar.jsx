"use client";

import { useState } from "react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import NavLink from "@/components/NavLink";
import {
  adminNavData,
  commonNavData,
  userNavData,
} from "@/data/SidebarNavData";

const Sidebar = () => {
  const { user, role } = useAuth();
  const [navToggle, setNavToggle] = useState(false);

  // console.log(role);

  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center justify-end relative">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-circle swap swap-rotate drawer-button fixed top-2 right-3 xl:hidden"
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
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-gray-500 text-base font-semibold">
            {user && role === "admin"
              ? adminNavData?.map(({ path, title, icon }) => (
                  <li key={path}>
                    <NavLink
                      href={path}
                      exact={path === "/dashboard/adminHome"}
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
