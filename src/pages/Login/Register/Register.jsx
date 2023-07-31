import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import WarningIcon from "@mui/icons-material/Warning";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import loginImg from "../../../assets/login.jpg";
import useAuth from "../../../hooks/useAuth";
import { Container } from "@mui/material";
import { toast } from "react-toastify";

const img_hoisting_token = import.meta.env.VITE_Image_Upload_Token;

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  // handle registration
  const handleRegistration = (data, e) => {
    e.preventDefault();
    // console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hoisting_token}`;

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const imgURL = imageData.data.display_url;
          registerUser(data.email, data.password)
            .then((result) => {
              updateUserProfile(data.name, imgURL)
                .then(() => {
                  console.log(result.user);
                  navigate("/login");
                })
                .catch((err) => toast.error(err.message));
            })
            .catch((err) => toast.error(err.message));
        }
      });

    // if ((name, photo, email, password)) {
    //   registerUser(email, password)
    //     .then((result) => {
    //       const createdUser = result.user;
    //       updateUserProfile(createdUser, name, photo);
    //       console.log(createdUser);
    //     })
    //     .catch((error) => {
    //       toast.error(error.message);
    //     });
    // }
  };

  return (
    <Container sx={{ marginTop: "40px", marginBottom: "40px" }}>
      <h1 className="mb-5 text-2xl font-bold text-center underline">
        Register - College Booking Commerce
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-5">
        <img src={loginImg} className="w-full md:w-3/4 lg:w-full" alt="" />
        <div className="w-full md:w-3/4 lg:w-full">
          <form onSubmit={handleSubmit(handleRegistration)}>
            <div className="relative z-0 mb-6 mx-auto group">
              <input
                type="text"
                {...register("name", { required: true })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Name
              </label>
            </div>
            <div className="relative z-0 mb-6 mx-auto group border border-violet-300 rounded-md">
              <input
                className="file-input w-full 
                file:mr-4 file:py-3 file:px-10
                file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-300 file:text-violet-700
                hover:file:bg-violet-400"
                {...register("image")}
                type="file"
              />
            </div>
            <div className="relative z-0 mb-6 mx-auto group">
              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
              {errors.email?.type === "pattern" && (
                <p className="text-red-600">
                  <WarningIcon />
                  Please provide a valid email
                </p>
              )}
            </div>
            <div className="relative z-0 mb-6 mx-auto group">
              <div className="flex items-center relative">
                <input
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: !/.+[A-Z].+/,
                  })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <p
                  className="absolute right-2 text-xl cursor-pointer "
                  onClick={() => setShow(!show)}
                >
                  <small>
                    {show ? (
                      <span>
                        <VisibilityIcon className="" />
                      </span>
                    ) : (
                      <span>
                        <VisibilityOffIcon className="" />
                      </span>
                    )}
                  </small>
                </p>
              </div>
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
              {errors.password?.type === "required" && (
                <p className="text-red-600">
                  {" "}
                  <WarningIcon />
                  Password is required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  {" "}
                  <WarningIcon />
                  Password must be 6 characters
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-red-600">
                  <WarningIcon />
                  Password must be one Capital letter
                </p>
              )}
            </div>
            <div className="relative z-0 mb-6 mx-auto group">
              <div className="flex items-center relative">
                <input
                  type={show ? "text" : "password"}
                  {...register("confirm", {
                    required: true,
                    minLength: 6,
                  })}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <p
                  className="absolute right-2 text-xl cursor-pointer "
                  onClick={() => setShow(!show)}
                >
                  <small>
                    {show ? (
                      <span>
                        <VisibilityIcon className="" />
                      </span>
                    ) : (
                      <span>
                        <VisibilityOffIcon className="" />
                      </span>
                    )}
                  </small>
                </p>
              </div>
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm Password
              </label>
              {/* {error && <span className="text-red-500">{error}</span>} */}
            </div>
            <input
              type="submit"
              className="w-full text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              value="Register"
            />
          </form>
          <div className="text-center mt-3">
            <p className="text-lg">
              Already registered college booking commerce? Please
              <Link className="text-orange-500 ms-1 underline" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
