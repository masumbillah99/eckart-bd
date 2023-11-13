"use client";

import useAuth from "@/hooks/useAuth";
import GoogleLogin from "@/components/GoogleLogin";
// import createJWT from "@/utils/createJWT";
import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const { createUser, profileUpdate } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const imageUpload = async (event) => {
    const formData = new FormData();
    if (!event.target.files[0]) return;
    formData.append("image", event.target.files[0]);
    const toastId = toast.loading("Image uploading...");

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image uploaded successfully!");
      setValue("photo", data?.data?.url);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Image not uploaded!");
    }
  };

  const handleRegister = async (data, event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    console.log(data.photo);
    const { name, photo, email, password } = data;
    try {
      const user = await createUser(email, password);
      console.log(user);
      await profileUpdate({ displayName: name, photoURL: photo });
      toast.dismiss(toastId);
      toast.success("User created successfully");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="card-body">
      <div className="form-control">
        <label htmlFor="name" className="label label-text font-semibold">
          Your Name
        </label>
        <input
          type="name"
          className="input input-bordered focus:outline-none"
          placeholder="write your name"
          autoComplete="name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-red-500 text-base mt-1">
            Please enter your name.
          </span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="file" className="label label-text font-semibold">
          Your Photo
        </label>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full focus:outline-none"
          onChange={imageUpload}
        />
        {errors.photo && (
          <span className="text-red-500 text-base mt-1">
            Please add your photo.
          </span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label label-text font-semibold">
          Your Email
        </label>
        <input
          type="email"
          className="input input-bordered focus:outline-none"
          placeholder="write your email"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please write your valid email address.
          </span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="password" className="label label-text font-semibold">
          Password
        </label>
        <input
          type="password"
          className="input input-bordered focus:outline-none"
          placeholder="enter a password"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
      </div>

      <div className="form-control">
        <label
          htmlFor="confirmPassword"
          className="label label-text font-semibold"
        >
          Confirm Password
        </label>
        <input
          type="password"
          className="input input-bordered focus:outline-none"
          placeholder="confirm password"
          autoComplete="confirm-password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) =>
              value === getValues("password") || "The Password do not match",
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            {errors.confirmPassword.message || "Please confirm your password."}
          </span>
        )}
      </div>

      <div className="form-control mt-2">
        <button className="btn btn-primary" type="submit">
          SignUp
        </button>
      </div>
      <p className="mt-3">
        Already have an account? Go to{" "}
        <Link className="text-indigo-600 underline" href="/login">
          Login
        </Link>
      </p>
      <div className="divider">OR</div>
      <GoogleLogin />
    </form>
  );
};

export default SignUpForm;
