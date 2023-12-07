"use client";

import { FaHeart } from "react-icons/fa";

const AddWishList = () => {
  const handleWishList = () => {
    console.log("wish list");
  };

  return (
    <>
      <FaHeart className="text-white transition-all" />
    </>
  );
};

export default AddWishList;
