import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import useAuth from "../hooks/useAuth";
import { Button } from "@mui/material";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSign = () => {
    googleSignIn()
      .then((result) => {
        // save user to db
        // saveUser(result.user);
        console.log(result.user);
        toast.success("Google Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="w-1/2 md:w-full flex flex-col md:flex-row justify-center mx-auto gap-3">
      <Button variant="contained" color="secondary" onClick={handleGoogleSign}>
        <GoogleIcon color="" className="inline me-2" />
        Google
      </Button>
      <Button variant="contained" color="secondary">
        <GitHubIcon color="" className="inline me-2" />
        Github
      </Button>
      <Button variant="contained" color="secondary">
        <FacebookIcon className="inline me-2" />
        Facebook
      </Button>
    </div>
  );
};

export default SocialLogin;
