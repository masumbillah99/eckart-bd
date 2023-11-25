import { BsCartCheckFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { IoBagAdd, IoHome } from "react-icons/io5";
import {
  MdDashboard,
  MdShoppingCart,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

export const userNavData = [
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

export const adminNavData = [
  {
    path: "/dashboard/adminHome",
    title: "Dashboard Home",
    icon: <MdDashboard />,
  },
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

export const commonNavData = [
  {
    path: "/",
    title: "Home",
    icon: <IoHome />,
  },
];
