"use client";

import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";
import { ToastContainer } from "react-toastify";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default Providers;
