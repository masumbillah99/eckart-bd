"use client";

import useAuth from "@/hooks/useAuth";
// import GoogleLogin from "@/components/GoogleLogin";
// import createJWT from "@/utils/createJWT";
import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { startTransition } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
      <div className="form-control">
        <label htmlFor="email" className="label label-text font-semibold">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          autoComplete="email"
          {...register("email", {
            required: true,
            pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
          })}
          className="input input-bordered focus:outline-none"
        />
        {errors.email && (
          <span className="text-red-500 text-base mt-1">
            Please enter a valid email address.
          </span>
        )}
      </div>
      <div className="form-control">
        <label htmlFor="password" className="label label-text font-semibold">
          Password
        </label>
        <input
          type="password"
          placeholder="password"
          autoComplete="new-password"
          {...register("password", { required: true, minLength: 6 })}
          className="input input-bordered focus:outline-none"
        />
        {errors.password && (
          <span className="text-red-500 text-base mt-1">
            Please enter a password.
          </span>
        )}
        <label className="label">
          <Link href="#" className="label-text link link-hover">
            Forgot password?
          </Link>
        </label>
      </div>

      <div className="form-control">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
      <p className="mt-3">
        Don&apos;t have an account? Go to{" "}
        <Link className="text-indigo-600 underline" href="/sign-up">
          Sign up
        </Link>
      </p>
      <div className="divider mt-5">OR</div>
      {/* <GoogleLogin from={from} /> */}
    </form>
  );
};

export default LoginForm;
