// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import Loader from "../components/Loader";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <Loader />;
//   }

//   if (user) {
//     return children;
//   }

//   return <Navigate to="/login" state={{ from: location }} replace />;
// };

// export default PrivateRoute;
