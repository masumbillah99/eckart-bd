// get data by email
export const getOrderDataByEmail = async (email) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/user-orders?email=${email}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return data;
};
