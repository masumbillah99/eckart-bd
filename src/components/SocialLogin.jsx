import useAuth from "@/hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { toast } from "react-toastify";
import createJWT from "@/utils/createJWT";
import { useRouter, useSearchParams } from "next/navigation";

const SocialLogin = () => {
  const { googleLogin, setLoading } = useAuth();
  const search = useSearchParams();
  const from = search.get("redirectUrl") || "/";
  const { replace, refresh } = useRouter();

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
