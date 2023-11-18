"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const AddProductForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const images = [];
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const handleAddProduct = (data, event) => {
    event.preventDefault();
    let product = {
      title,
      model,
      color,
      brand,
      origin_country,
      price,
      category,
      sub_category,
      warranty,
      img,
      capacity,
      volume,
      features: [],
      frequency,
      cable_length,
      display_size,
      material,
      watts,
    };
    console.log(data);
  };

  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "mobile", label: "Mobile & Watch" },
    { value: "computer", label: "Computer Items" },
    { value: "sports", label: "Sports" },
    { value: "clothing", label: "Clothing" },
    { value: "books", label: "Books" },
    { value: "islamic", label: "Islamic" },
    { value: "toys", label: "Toys" },
    { value: "groceries", label: "Groceries" },
    { value: "kitchen", label: "Kitchen" },
  ];

  return (
    <>
      <form onSubmit={handleAddProduct}>
        <div className="lg:flex gap-7">
          {/* left site from */}
          <div className="lg:w-[60%]">
            <div className="border w-full dark:border-neutral-500 py-5 px-10 mb-5 shadow-xl rounded-xl">
              {/* product title */}
              <div>
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold  "
                  htmlFor="title"
                >
                  Product Name
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write Product Name"
                  name="title"
                  {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}
              </div>

              {/* model */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold  "
                  htmlFor="model"
                >
                  Product Model
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write Product Model"
                  name="model"
                  defaultValue={""}
                  {...register("model")}
                />
              </div>

              {/* brand */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold  "
                  htmlFor="brand"
                >
                  Product Brand
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write Product brand"
                  name="brand"
                  {...register("brand", { required: true })}
                />
                {errors.brand && <span>This field is required</span>}
              </div>

              {/* origin_country */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold  "
                  htmlFor="origin_country"
                >
                  Product Origin Country
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write origin"
                  name="origin_country"
                  {...register("origin_country", { required: true })}
                />
                {errors.origin_country && <span>This field is required</span>}
              </div>

              {/* category */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="category"
                >
                  Product Category
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={categoryOptions}
                  {...register("category", { required: true })}
                />
              </div>

              {/* sub-category */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="sub_category"
                >
                  Sub Category
                </label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  {...register("sub_category")}
                />
              </div>

              {/* features */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="features"
                >
                  features
                </label>
                <CreatableSelect
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  isMulti
                />
              </div>

              {/* Materials */}
              <div>
                <label
                  className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold"
                  htmlFor="materials"
                >
                  Materials
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write Materials"
                  name="materials"
                  defaultValue={""}
                  {...register("materials")}
                />
              </div>

              {/* description */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="description"
                >
                  Product Details
                </label>
                <textarea
                  className="textarea textarea-bordered text-base bg-gray-100 w-full h-40 focus:outline-none rounded-lg"
                  placeholder="write product details"
                  name="description"
                  {...register("description", { required: true })}
                ></textarea>
              </div>
            </div>

            {/* Media information*/}
            <div className="border rounded-xl w-full p-5 mb-5 shadow-xl dark:border-neutral-500 bg-transparent  ">
              {/* Additional :*/}
              <h3 className="text-black mb-1 dark:text-gray-200 mt-3 font-semibold">
                Media
              </h3>
              <hr className="border-t border-[#FF7B13]" />
              <div className="md:flex gap-5">
                <div className="md:w-[60%] ">
                  <label
                    className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold "
                    htmlFor="image"
                  >
                    Main Image:
                  </label>
                  <label className="shadow-md flex justify-center w-full h-32 md:h-96  transition bg-white dark:border-neutral-500 dark:bg-neutral-800   border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    {images ? (
                      <span className="flex items-center space-x-2">
                        file
                        <span className="font-medium text-gray-600 dark:text-white">
                          Drop files to Attach, or
                          <span className="text-blue-600 underline">
                            browse
                          </span>
                        </span>
                      </span>
                    ) : (
                      <>
                        <div className="flex relative overflow-hidden">
                          <Image
                            src={MainImage}
                            className="object-cover"
                            width={600}
                            height={600}
                            alt="main image"
                          ></Image>
                        </div>
                      </>
                    )}
                    <input
                      type="file"
                      id="image"
                      name="image"
                      required
                      className="hidden "
                    />
                  </label>
                </div>

                {/* Additional :*/}
                <div className="md:w-[40%]">
                  <label className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold ">
                    Additional Image URLs:
                  </label>

                  <label className=" shadow-md flex justify-center w-full h-32 md:h-96   transition bg-white dark:border-neutral-500 dark:bg-neutral-800  border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                    {images.length > 0 ? (
                      <>
                        <div className="grid grid-cols-2 overflow-hidden  row-span-2">
                          {images.map((item, index) => (
                            <div
                              key={index}
                              className="relative col-span-1 h-auto w-full row-span-1"
                            >
                              <Image
                                src={item}
                                height={100}
                                width={300}
                                className="object-cover"
                                alt="sub image"
                              ></Image>
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <span className="flex items-center space-x-2 ">
                          file
                          <span className="font-medium text-gray-600 dark:text-white">
                            Drop files to Attach, or
                            <span className="text-blue-600 underline">
                              browse
                            </span>
                          </span>
                        </span>
                      </>
                    )}

                    <input
                      type="file"
                      id="images"
                      multiple
                      name="images"
                      required
                      className="hidden "
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* right side from */}
          <div className="lg:w-[40%]">
            <div className="border w-full dark:border-neutral-500 p-5 mb-5 shadow-xl rounded-xl">
              {/* price */}
              <div>
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="price"
                >
                  Product Price
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="number"
                  id="price"
                  placeholder="0"
                  name="price"
                  {...register("price", { required: true })}
                />
              </div>

              {/* Product Quantity */}
              <div>
                <label
                  className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold"
                  htmlFor="quantity"
                >
                  Quantity
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="number"
                  placeholder="0"
                  name="quantity"
                  {...register("quantity", { required: true })}
                />
              </div>

              {/* warranty */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="warranty"
                >
                  Warranty (years)
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write warranty"
                  name="warranty"
                  defaultValue={""}
                  {...register("warranty")}
                />
              </div>

              {/* volume */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="volume"
                >
                  Volume (mg / ml)
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write volume"
                  name="volume"
                  {...register("volume", { required: true })}
                />
                {errors.volume && <span>This field is required</span>}
              </div>

              {/* capacity */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="capacity"
                >
                  Capacity
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write capacity"
                  name="capacity"
                  defaultValue={""}
                  {...register("capacity")}
                />
              </div>

              {/* Frequency */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="frequency"
                >
                  Frequency (headphones)
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write Frequency"
                  name="frequency"
                  defaultValue={""}
                  {...register("frequency")}
                />
              </div>

              {/* display_size */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="display_size"
                >
                  Display_size (monitors / mobiles / watch)
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write display_size"
                  name="display_size"
                  defaultValue={""}
                  {...register("display_size")}
                />
              </div>

              {/* cable length */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold"
                  htmlFor="cable_length"
                >
                  Cable Length (headphones)
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write cable length"
                  name="cable_length"
                  defaultValue={""}
                  {...register("cable_length")}
                />
              </div>

              {/* Watts */}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold"
                  htmlFor="watts"
                >
                  Watts
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write Watts"
                  name="watts"
                  defaultValue={""}
                  {...register("watts")}
                />
              </div>

              <div className="mt-5">
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddProductForm;
