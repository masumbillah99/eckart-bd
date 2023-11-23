import { toast } from "react-toastify";

// get product categories
export const productCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/product-categories`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

// add product item in db
export const addProductInDb = async (productData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/add-product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  if (res.ok) {
    const data = await res.json();
    toast.success("Product add in db");
    return data;
  } else {
    console.log("Error:", res.statusText);
  }
};
