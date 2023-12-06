import AddToCartBtn from "@/components/AddToCartBtn/AddToCartBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const ProductCard = ({ productData }) => {
  const { _id, product, category, images, price, rating } = productData;

  return (
    <div className="card w-96 bg-base-100 shadow-lg border">
      <figure className="px-4 pt-4">
        <Image
          src={images[0]}
          alt="Shoes"
          className="w-4/6 h-60"
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
            href={`/category/${category?.value}/${_id}`}
            className="font-semibold bg-[#E3F3FA] hover:bg-[#0397D3] hover:text-white transition border py-2 px-3 rounded-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
