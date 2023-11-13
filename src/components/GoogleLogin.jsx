import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      console.log(user);
      toast.dismiss(toastId);
      toast.success("Google login successfully");
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "user not signed in");
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-outline mx-auto">
      <FcGoogle className="text-xl" /> Continue with Google
    </button>
  );
};

export default GoogleLogin;
