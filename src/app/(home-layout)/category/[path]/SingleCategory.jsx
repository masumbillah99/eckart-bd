"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import AddToCartBtn from "@/components/AddToCartBtn/AddToCartBtn";
import AddWishList from "@/components/Dashboard/AddWishList/AddWishList";

const SingleCategory = ({ productData, path }) => {
  const { _id, product, category, images, price, rating } = productData;
  const [isTrue, setIsTrue] = useState(false);

  const mouseOver = () => {
    setIsTrue(true);
  };

  const mouseLeave = () => {
    setIsTrue(false);
  };

  return (
    <>
      {category?.value !== "electronics" && (
        <Link href={`/category/${path}/${_id}`}>
          <div className="card card-compact h-96 w-96 bg-base-100">
            <figure
              className={`border rounded-none overflow-hidden relative transition-all`}
              onMouseEnter={mouseOver}
              onMouseLeave={mouseLeave}
            >
              <Image
                src={images[0]}
                width={300}
                height={300}
                className="max-h-[400px] hover:scale-110 transition-all"
                alt=""
              />
              <span className="block absolute right-3 top-3 bg-black p-1 rounded-full">
                <AddWishList />
              </span>
              <div
                className={`absolute bottom-0 bg-black w-full ${
                  isTrue ? "block" : "hidden"
                }`}
              >
                <AddToCartBtn _id={_id} padding={"py-2 px-3"} isTrue={isTrue} />
              </div>
            </figure>
            <div className="mt-2">
              <h2 className="card-title text-base">{product.title}</h2>
              <div className="flex justify-between items-center">
                <p className="flex items-center font-semibold text-gray-500 text-lg">
                  <MdOutlineCurrencyRupee /> {price}
                </p>
                <p>{rating || <FaStar className="text-orange-500" />}</p>
              </div>
            </div>
          </div>
        </Link>
      )}

      {category?.value === "electronics" && (
        <div className="card w-96 bg-base-100 shadow-lg border">
          <figure className="px-4 pt-3">
            <Image
              src={images[0]}
              alt="Shoes"
              className="w-4/6 h-52"
              width={200}
              height={200}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.title}</h2>
            <p>{rating || <FaStar className="text-orange-500" />}</p>
            <p className="flex items-center font-semibold text-lg">
              <MdOutlineCurrencyRupee /> {price}
            </p>
            <div className="card-actions justify-between mt-1">
              <AddToCartBtn _id={_id} padding={"py-2 px-3"} />
              <Link
                href={`/category/${path}/${_id}`}
                className="font-semibold bg-[#E3F3FA] hover:bg-[#0397D3] hover:text-white transition border py-2 px-3 rounded-md"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCategory;
