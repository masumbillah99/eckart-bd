"use client";

import useAuth from "@/hooks/useAuth";
import { addToWishList, getMyWishList } from "@/utils/productsApis";
import { FaHeart } from "react-icons/fa";

const AddWishList = ({ _id }) => {
  const { user } = useAuth();

  const handleWishList = async () => {
    // await getMyWishList(user?.email);
    // const existItemIndex = wishList?.find((item) => item._id === _id);
    // if (existItemIndex) {
    //   toast("Already add in wishlist! Go to dashboard");
    //   return;
    // } else {
    const data = { _id: _id, email: user?.email };
    await addToWishList(data);
    // }
  };

  return (
    <>
      <FaHeart onClick={handleWishList} className="text-white transition-all" />
    </>
  );
};

export default AddWishList;
