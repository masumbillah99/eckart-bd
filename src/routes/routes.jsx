import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Main from "../layouts/Main";
import CollegeCard from "../pages/home/CollegeCard/CollegeCard";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import SingleCollegeCard from "../pages/SingleCollegeCard/SingleCollegeCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/colleges", element: <CollegeCard /> },
      {
        path: "/colleges/:id",
        element: <SingleCollegeCard />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER}/colleges/${params.id}`),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
