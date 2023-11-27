"use client";

import useAuth from "@/hooks/useAuth";

const UserInfo = () => {
  const { user } = useAuth();

  return (
    <div className="bg-shadow-round p-5 mb-10">
      <h3 className="text-lg font-semibold">User Information</h3>
      <hr className="bg-black border-dotted my-3" />
      <p>Name: {user?.displayName}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default UserInfo;
