import app from "@/firebase/firebase.config";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import AuthContext from "@/contexts/AuthContext";
import { getUserRoleFromDb } from "@/utils/usersApi";

// initialize firebase authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartProduct, setCartProduct] = useState([]);

  // set user role in state from db
  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("product-cart")) || [];
    setCartProduct(storedProducts);

    if (user) {
      getUserRoleFromDb(user?.email).then((data) => {
        setRole(data?.role);
      });
    }
  }, [user]);

  // sign up new users
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in existing users
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // google sign in
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out a user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // update user data
  const profileUpdate = async (updateUser = {}) => {
    setLoading(true);
    await updateProfile(auth.currentUser, updateUser);
    setUser((prevUser) => ({ ...prevUser, ...updateUser }));
  };

  // update user password
  const updateUserPassword = (newPassword) => {
    return updatePassword(auth.currentUser, newPassword);
  };

  // reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const authInfo = {
    user,
    role,
    loading,
    cartProduct,
    setRole,
    setLoading,
    createUser,
    signInUser,
    logOutUser,
    profileUpdate,
    googleLogin,
    updateUserPassword,
    resetPassword,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
