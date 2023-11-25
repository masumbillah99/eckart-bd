import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductDetails = ({ productDetails }) => {
  const { product, company, sub_category, price, stock, rating } =
    productDetails;

  return (
    <div class="">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-700">
        {product.title} | {product.color.split(" ")[0]} | {product.model}
      </h1>

      <div class="mt-5 flex flex-col gap-3">
        <p className="text-2xl font-bold">{rating || ""}</p>
        <p className="text-2xl font-bold">TK. {price}</p>
        <p>
          Brand: <span className="text-blue-500">{company.brand}</span>
        </p>
        <p>
          Category: <span className="text-blue-500">{sub_category}</span>
        </p>
        <p>
          Warranty Period:{" "}
          <span className="text-blue-500">{product.warranty}</span>
        </p>
        <p>
          Colors: <span className="text-blue-500">{product.color}</span>
        </p>
        <p className="badge badge-warning p-3">{stock} in stock</p>
        <div className="my-3">
          <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white text-xl py-2 px-7 rounded-md">
            <FaShoppingCart /> <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
