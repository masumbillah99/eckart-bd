// popular collection
export const popularProductCollection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/popular-collection`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

// popular collection
export const trendingProductCollection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/trending-collection`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

// popular collection
export const hotDealsProductCollection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/hot-deals-collection`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};

// popular collection
export const bestSellerProductCollection = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/best-seller-collection`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};
