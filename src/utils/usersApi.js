/** save user data in db */
export const saveUserInDb = async (user) => {
  const userData = {
    email: user.email,
    name: user.displayName,
    image: user.photoURL,
    role: "user",
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/set-users/${user?.email}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};

/** get user role */
export const getUserRoleFromDb = async (email) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/users-role/${email}`
    );
    return await res.json();
  } catch (error) {
    console.log(error.message);
  }
};
