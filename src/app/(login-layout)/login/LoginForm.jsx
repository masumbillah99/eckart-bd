"use client";

import SocialLogin from "@/components/SocialLogin";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { TbFidgetSpinner } from "react-icons/tb";
import { toast } from "react-toastify";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { loading, setLoading, signInUser, googleLogin } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

  const handleLogin = async (data, event) => {
    event.preventDefault();
    const { email, password } = data;
    try {
      const { user } = await signInUser(email, password);
      await createJWT({ email: user?.email });
      toast.success("User created successfully");
      replace(from);
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { user } = await googleLogin();
      await createJWT({ email: user?.email });
      toast.success("Google login successfully");
      replace(from);
    } catch (error) {
      setLoading(false);
      toast.error(error.message || "user not signed in");
    }
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-control">
          <label htmlFor="email" className="label label-text font-semibold">
            Email
          </label>
          <input
            type="email"
            placeholder="email"
            autoComplete="email"
            {...register("email", { required: true })}
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
            {...register("password", { required: true })}
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

        <div className="mt-5">
          <button
            type="submit"
            className="bg-primary w-full rounded-md py-3 text-white uppercase"
          >
            {loading ? (
              <TbFidgetSpinner className="m-auto animate-spin" size={24} />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>

      <p className="mt-3">
        Don&apos;t have an account? Go to{" "}
        <Link className="text-indigo-600 underline" href="/sign-up">
          SignUp
        </Link>
      </p>
      <div className="divider">OR</div>
      <div className="flex flex-col gap-3">
        <button onClick={handleGoogleLogin} className="btn btn-outline mx-auto">
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
        <button className="btn btn-outline mx-auto">
          <FaFacebook className="text-xl" /> Continue with Facebook
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
