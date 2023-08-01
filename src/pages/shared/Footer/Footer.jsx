import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <footer className="bg-[#1E202D] text-white py-10">
      <Container maxWidth="xl">
        <div className="flex flex-col md:flex-row items-center justify-around gap-5">
          <p>
            <small>Copyright © 2023 college booking</small>
          </p>
          <div className="flex gap-5">
            <Link to="#">Disclaimer</Link>
            <Link to="#">Terms</Link>
            <Link to="#">Privacy Policy</Link>
          </div>
          <div className="flex gap-5">
            <Link to="https://md-masumbillah.netlify.app" target={"_blank"}>
              <LanguageIcon />
            </Link>
            <Link to="https://github.com/masumbillah99" target={"_blank"}>
              <GitHubIcon />
            </Link>
            <Link to="https://linkedin.com/in/masumbillah99" target={"_blank"}>
              <LinkedInIcon />
            </Link>
            <Link
              to="https://www.facebook.com/muhammadmasum99"
              target={"_blank"}
            >
              <FacebookIcon />
            </Link>
            <Link to="https://youtube.com/@awebtutor9986" target={"_blank"}>
              <YouTubeIcon />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
