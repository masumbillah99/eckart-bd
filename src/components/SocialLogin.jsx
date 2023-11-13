import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleLogin, setLoading } = useAuth();

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Loading...");
    try {
      const { user } = await googleLogin();
      console.log(user);
      toast.dismiss(toastId);
      toast.success("Google login successfully");
    } catch (error) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.error(error.message || "user not signed in");
    }
  };

  const handleFacebookLogin = () => {
    console.log("facebook login");
  };

  return (
    <div className="flex flex-col gap-3">
      <button onClick={handleGoogleLogin} className="btn btn-outline mx-auto">
        <FcGoogle className="text-xl" /> Continue with Google
      </button>
      <button onClick={handleFacebookLogin} className="btn btn-outline mx-auto">
        <FaFacebook className="text-xl" /> Continue with Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
