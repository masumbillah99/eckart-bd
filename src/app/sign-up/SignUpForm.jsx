"use client";

import useAuth from "@/hooks/useAuth";
// import GoogleLogin from "@/components/GoogleLogin";
// import createJWT from "@/utils/createJWT";
import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { startTransition } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    console.log(data);
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
          {...register("name", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
        />
        {errors.email && (
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
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please add your photo.
          </span>
        )}
      </div>

      <div className="form-control">
        <label htmlFor="email" className="label label-text font-semibold">
          Email
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
      <div className="divider mt-5">OR</div>
      {/* <GoogleLogin from={from} /> */}
    </form>
  );
};

export default SignUpForm;
