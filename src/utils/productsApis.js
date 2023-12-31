import { toast } from "react-toastify";

/** get data from db */
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

// get all product form db
export const getProductFromDb = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/all-product-data`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

// get product by category
export const getProductsByCategory = async (path) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/category-products/${path}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

// get single product details
export const getProductDetailsFromDb = async (id) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/product-details/${id}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

// my wish list products
export const getMyWishList = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/my-wish-list?user_email=${email}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

/** post data in db */
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

// add wish list product
export const addToWishList = async (productData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/add-to-wishlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });

  if (res.ok) {
    const data = await res.json();
    toast.success("add in wishlist");
    return data;
  } else {
    console.log("Error:", res.statusText);
  }
};
