"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { addProductInDb } from "@/utils/productsApis";

const categoriesOptions = [
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

const featuresOptions = [
  { value: "beautiful", label: "beautiful" },
  { value: "awesome", label: "awesome" },
];

const AddProductForm = () => {
  const [categoryOption, setCategoryOption] = useState(null);
  const [featureOption, setFeatureOption] = useState(null);
  const [images, setImages] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const uploadMultiImg = async (event) => {
    const formData = new FormData();
    for (let i = 0; i < event.target.files.length; i++) {
      formData.append("image", event.target.files[i]);
      try {
        const res = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await res.json();
        setImages((prevImg) => [...prevImg, data?.data?.url]);
      } catch (error) {}
    }
  };

  const handleAddProduct = async (data, event) => {
    event.preventDefault();
    data.category = categoryOption;
    data.features = featureOption;

    const {
      title,
      model,
      brand,
      origin_country,
      category,
      sub_category,
      features,
      color,
      materials,
      description,
      price,
      stock,
      warranty,
      volume,
      capacity,
      frequency,
      display_size,
      cable_length,
      watts,
    } = data;

    const priceNumber = parseFloat(price);
    const stockNumber = parseFloat(stock);
    const updatedData = {
      product: { title, model, color, materials, warranty, volume, capacity },
      company: { brand, origin_country },
      category,
      sub_category,
      features,
      images: images,
      description,
      price: priceNumber,
      stock: stockNumber,
      info: { frequency, display_size, cable_length },
      watts,
    };

    await addProductInDb(updatedData);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleAddProduct)}
        className="bg-[#F3F3F3] p-12 rounded-lg mx-2 md:mx-5 lg:mx-0"
      >
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
                  defaultValue={categoryOption}
                  onChange={setCategoryOption}
                  options={categoriesOptions}
                  required
                />
              </div>

              {/* sub-category */}
              <div className="form-control w-full">
                <label className="font-semibold mb-3">
                  Product Sub Category
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write sub category"
                  name="sub_category"
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
                  defaultValue={featureOption}
                  onChange={setFeatureOption}
                  options={featuresOptions}
                  isMulti
                  required
                />
              </div>

              {/* Media information*/}
              <div className="my-2">
                <label
                  className="block text-black dark:text-gray-200 mb-1 font-semibold"
                  htmlFor="file"
                >
                  Add File
                </label>
                <input
                  type="file"
                  multiple
                  className="file-input file-input-bordered file-input-primary w-full focus:outline-none"
                  onChange={uploadMultiImg}
                />
              </div>

              {/* color */}
              <div>
                <label
                  className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold"
                  htmlFor="color"
                >
                  Product Color
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="text"
                  placeholder="Write colors name"
                  name="color"
                  defaultValue={""}
                  {...register("color")}
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

              {/* Product stock */}
              <div>
                <label
                  className="block text-black dark:text-gray-200 mb-1 mt-3 font-semibold"
                  htmlFor="stock"
                >
                  Product Stock
                </label>
                <input
                  className="input input-bordered bg-gray-100 w-full focus:outline-none hover:border-indigo-500"
                  type="number"
                  placeholder="0"
                  name="stock"
                  {...register("stock", { required: true })}
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
