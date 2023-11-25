"use client";
import Image from "next/image";
import { useState } from "react";
import {
  MagnifierContainer,
  MagnifierProps,
  Magnifier,
  GlassMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
} from "react-image-magnifiers";

const ProductImage = ({ productDetails }) => {
  const { category, images } = productDetails;
  const [mainImage, setMainImage] = useState(images[0]);
  const [state, setState] = useState("");

  // highlight product image change handler
  const handleMainImage = (image) => {
    setMainImage(image);
  };

  return (
    <div class="lg:col-span-3 lg:row-end-1 mb-10 lg:mb-0 w-1/3">
      <div class="lg:flex lg:items-start">
        <div class="lg:order-2 lg:ml-5 mb-5 lg:mb-0">
          <div class="max-w-3xl mx-auto px-10 py-5 overflow-hidden rounded-lg border">
            {category.value !== "electronics" ? (
              <Image
                width={300}
                height={300}
                className="h-full w-3/4 md:w-1/2 lg:w-full"
                src={mainImage}
                alt=""
              />
            ) : (
              <Magnifier
                imageSrc={mainImage}
                imageAlt="example"
                largeImageSrc={mainImage}
                mouseActivation={MOUSE_ACTIVATION.CLICK}
                touchActivation={TOUCH_ACTIVATION.TAP}
                dragToMove={true}
                width={300}
                height={300}
                style={{ cursor: "pointer" }}
                className="h-full w-3/4 md:w-1/2 lg:w-full cursor-pointer"
              />
            )}
          </div>
        </div>

        <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
          <div class="flex flex-row items-start justify-center lg:flex-col gap-5">
            {images &&
              images?.map((image, index) => (
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
