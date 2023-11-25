"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImage = ({ productDetails }) => {
  const [mainImage, setMainImage] = useState(productDetails?.images[0]);
  const { images } = productDetails;

  // highlight product image change handler
  const handleMainImage = (image) => {
    setMainImage(image);
  };

  return (
    <div class="lg:col-span-3 lg:row-end-1">
      <div class="lg:flex lg:items-start">
        <div class="lg:order-2 lg:ml-5 mb-5 lg:mb-0">
          <div class="max-w-3xl mx-auto px-10 py-5 overflow-hidden rounded-lg border">
            <Image
              width={200}
              height={300}
              class="h-full w-3/4 md:w-1/2 lg:w-full"
              src={mainImage}
              alt=""
            />
          </div>
        </div>

        <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div class="flex flex-row items-start justify-center lg:flex-col gap-5">
            {productDetails?.images &&
              productDetails?.images?.map((image, index) => (
                <button
                  type="button"
                  class="flex-0 aspect-square mb-3 p-1 h-20 overflow-hidden rounded-lg border border-gray-900 text-center"
                  key={index}
                  onClick={() => handleMainImage(image)}
                >
                  <Image
                    width={100}
                    height={100}
                    class="h-full w-full object-cover"
                    src={image}
                    alt=""
                  />
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
