export const getProductCategories = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/product-category`,
      { cache: "no-store" }
    );
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};
