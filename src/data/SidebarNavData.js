import useAuth from "@/hooks/useAuth";
import { getUserRoleFromDb } from "@/utils/usersApi";
import { useEffect, useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { IoBagAdd, IoHome } from "react-icons/io5";
import {
  MdDashboard,
  MdShoppingCart,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";

const SidebarNavData = () => {
  const { user } = useAuth();
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const fetchSideBarData = async () => {
      try {
        const getRole = await getUserRoleFromDb(user?.email);
        let sideNavData = [];
        if (user && getRole?.role === "admin") {
          sideNavData = [
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
            {
              path: "/",
              title: "Home",
              icon: <IoHome />,
            },
          ];
        } else if (user && getRole?.role === "user") {
          sideNavData = [
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
            {
              path: "/",
              title: "Home",
              icon: <IoHome />,
            },
          ];
        }

        setNavData(sideNavData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchSideBarData();
  }, [user]);

  return navData;
};

export default SidebarNavData;
