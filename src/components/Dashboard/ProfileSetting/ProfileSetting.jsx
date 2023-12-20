'use client';

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";

const ProfileSetting = () => {
  const { user, profileUpdate, updateUserPassword } = useAuth();
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { register, handleSubmit, setValue, reset } = useForm();

  const imageUpload = async (event) => {
    const formData = new FormData();
    // if (!event.target.files[0]) return;
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
      setPhoto(data?.data?.url);
      setValue("photo", data?.data?.url);
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Image not uploaded!");
    }
  };

  const handleUpdateInfo = async (data, event) => {
    event.preventDefault();
    await profileUpdate({ displayName: data.name, photoURL: photo });
    reset();
  };

  const handleUpdatePrivacy = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("password does not match");
    }
    updateUserPassword(password)
      .then(() => {
        toast.success("password updated successfully");
        event.target.reset();
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      {/* update name and image */}
      <div className="my-10 md:w-3/4 2xl:w-1/2 mx-auto ">
        <h3 className="text-xl font-bold">Update Your Profile Info</h3>
        <form
          onSubmit={handleSubmit(handleUpdateInfo)}
          className="border border-indigo-600 my-5 p-5 rounded-lg"
        >
          <div>
            <label htmlFor="email" className="text-lg font-bold">
              Your Email
            </label>{" "}
            <br />
            <input
              type="email"
              className="input input-bordered input-error w-full mt-2 focus:outline-none"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="my-5  ">
            <label htmlFor="name" className="text-lg font-bold">
              Your Name
            </label>{" "}
            <br />
            <input
              type="text"
              {...register("name", { required: true })}
              defaultValue={user?.displayName}
              placeholder="your user name"
              className="input input-bordered input-error w-full mt-2 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="image" className="text-lg font-bold">
              Your Profile
            </label>{" "}
            <br />
            <input
              type="file"
              // {...register("image", { required: true })}
              placeholder="your profile picture"
              className="file-input file-input-bordered file-input-info w-full mt-2 focus:outline-none"
              onChange={imageUpload}
            />
          </div>
          <div className="relative mb-20">
            <button
              className="absolute right-0 border bg-indigo-500 hover:bg-indigo-700 text-white px-7 py-3 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* update password */}
      <div className="my-10 md:w-3/4 2xl:w-1/2 mx-auto">
        <h3 className="text-xl font-bold">Update your Privacy</h3>
        <form
          onSubmit={handleUpdatePrivacy}
          className="my-5 p-5 rounded-lg border border-indigo-600 "
        >
          <div className="my-5">
            <label htmlFor="password" className="text-lg font-bold">
              New Password
            </label>{" "}
            <div className="flex items-center relative">
              <input
                type={show ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered input-error w-full mt-2 focus:outline-none"
                required
              />
              <p
                className="absolute right-5 mt-2 text-xl cursor-pointer "
                onClick={() => setShow(!show)}
              >
                <small>
                  {show ? (
                    <span>
                      <FaRegEye className="" />
                    </span>
                  ) : (
                    <span>
                      <FaRegEyeSlash className="" />
                    </span>
                  )}
                </small>
              </p>
            </div>
          </div>
          <div className="my-5">
            <label htmlFor="confirm" className="text-lg font-bold">
              Confirm Password
            </label>{" "}
            <br />
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              className="input input-bordered input-error w-full mt-2 focus:outline-none"
              required
            />
          </div>

          <div className="relative mb-20">
            <button
              className="absolute right-0 border bg-indigo-500 hover:bg-indigo-700 text-white px-7 py-3 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileSetting;
