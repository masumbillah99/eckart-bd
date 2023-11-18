import React from "react";
import AddProductForm from "./AddProductForm";

const AddProductPage = () => {
  return (
    <section className="lg:px-7 xl:px-12 pt-3">
      {/* <h1 className="text-2xl font-bold">Add Product Information</h1>
      <hr className="w-1/4 border-2 border-indigo-500 rounded-xl mt-2 mb-5" /> */}
      <AddProductForm />
    </section>
  );
};

export default AddProductPage;
