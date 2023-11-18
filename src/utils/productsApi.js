// import "server-only";

// get product categories
export const getCategoriesFromDb = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/product-categories`,
      { next: { revalidate: 5 } }
    );
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};
