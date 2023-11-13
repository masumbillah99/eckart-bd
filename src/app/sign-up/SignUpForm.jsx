"use client";

import useAuth from "@/hooks/useAuth";
import SocialLogin from "@/components/SocialLogin";
// import createJWT from "@/utils/createJWT";
import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { startTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";

const SignUpForm = () => {
  const { createUser, profileUpdate, loading, setLoading } = useAuth();
  const [checked, setChecked] = useState(false);
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
      // toast.success("Image uploaded successfully!");
      setValue("photo", data?.data?.url);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Image not uploaded!");
    }
  };

  const handleRegister = async (data, event) => {
    event.preventDefault();
    const toastId = toast.loading("Loading...");
    const { name, photo, email, password } = data;
    try {
      const user = await createUser(email, password);
      console.log(user);
      await profileUpdate({ displayName: name, photoURL: photo });
      toast.dismiss(toastId);
      toast.success("User created successfully");
    } catch (error) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.error(error.message);
    }
  };

  const handleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(handleRegister)}>
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
              {errors.confirmPassword.message ||
                "Please confirm your password."}
            </span>
          )}
        </div>

        <div className="form-control flex-row items-center gap-3 mt-5">
          <input
            type="checkbox"
            checked={checked}
            className="checkbox checkbox-primary"
            onChange={handleCheckbox}
          />
          <span className="label-text font-semibold">
            Accepts Terms &amp; Conditions
          </span>
        </div>

        <div className="mt-5">
          <button
            type="submit"
            className="bg-primary w-full rounded-md py-3 text-white uppercase disabled:bg-indigo-500 disabled:cursor-not-allowed"
            disabled={!checked}
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </form>

      <p className="mt-3">
        Already have an account? Go to{" "}
        <Link className="text-indigo-600 underline" href="/login">
          Login
        </Link>
      </p>
      <div className="divider">OR</div>
      <SocialLogin />
    </div>
  );
};

export default SignUpForm;
