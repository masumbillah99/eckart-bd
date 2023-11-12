import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-transparent border border-b-0 shadow-xl shadow-black">
      <div className="lg:w-[90%] md:[90%] w-full py-6 mx-auto flex flex-col lg:flex-row items-center lg:gap-0 gap-5 lg:justify-between justify-center">
        {/* logo section */}
        <div className="flex flex-col items-center lg:items-start">
          <p>Hat-Bazar</p>

          <div className="mt-5 flex gap-4">
            <div className="text-indigo-800 border-2 duration-300 hover:bg-indigo-800 hover:text-white cursor-pointer border-indigo-800 p-2 w-fit rounded-full">
              <Link href={"https://github.com/masumbillah99"} target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="text-indigo-800 border-2 duration-300 hover:bg-indigo-800 hover:text-white cursor-pointer border-indigo-800 p-2 w-fit rounded-full">
              <Link
                href={"https://www.linkedin.com/in/mdmasumbillah99"}
                target="_blank"
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="text-indigo-800 border-2 duration-300 hover:bg-indigo-800 hover:text-white cursor-pointer border-indigo-800 p-2 w-fit rounded-full">
              <Link
                href={"https://www.facebook.com/muhammadmasum99"}
                target="_blank"
              >
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>

        {/* contact section */}
        <div className="text-center lg:text-start">
          <h4 className="text-black font-semibold dark:text-white">
            Contact Info
          </h4>
          <div className="flex flex-col items-center lg:items-start text-gray">
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <p className="text-sm dark:text-white">
                Phone: <span className="text-gray-700">+8801698765432</span>
              </p>
            </div>
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <p className="text-sm dark:text-white">
                Email: <span className="text-gray-700">web@hat-bazar.com</span>
              </p>
            </div>
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <p className="text-sm dark:text-white">
                Address:{" "}
                <span className="text-gray-700">
                  Gulshan, Dhaka, Bangladesh
                </span>
              </p>
            </div>
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <p className="text-sm dark:text-white">
                Website:{" "}
                <span className="text-gray-700">
                  <Link
                    href={"https://hat-bazar.vercel.app"}
                    target="_blank"
                    className="hover:text-indigo-800 transition underline"
                  >
                    https://hat-bazar.vercel.app
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* about section */}
        <div className="text-center lg:text-start">
          <h4 className="text-black font-semibold dark:text-white">
            Useful Links
          </h4>
          <div className="flex flex-col items-center lg:items-start text-gray">
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <span className="text-gray-700 text-sm">
                <Link
                  href={"/about"}
                  target="_blank"
                  className="hover:text-indigo-800 hover:underline transition"
                >
                  About us
                </Link>
              </span>
            </div>
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <span className="text-gray-700 text-sm">
                <Link
                  href={"/privacy-policy"}
                  target="_blank"
                  className="hover:text-indigo-800 hover:underline transition"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <span className="text-gray-700 text-sm">
                <Link
                  href={"/terms-condition"}
                  target="_blank"
                  className="hover:text-indigo-800 hover:underline transition"
                >
                  Terms &amp; Conditions
                </Link>
              </span>
            </div>
            <div className="flex items-center my-2">
              <MdKeyboardArrowRight />
              <span className="text-gray-700 text-sm">
                <Link
                  href={"/faq"}
                  target="_blank"
                  className="hover:text-indigo-800 hover:underline transition"
                >
                  Ask Questions / FAQ
                </Link>
              </span>
            </div>
          </div>
        </div>

        {/* payment section */}
        <div className="text-center lg:text-start">
          <h4 className="text-black font-semibold dark:text-white">
            Payment With
          </h4>
        </div>
      </div>

      <div className="bg-white dark:bg-transparent py-3 border-t text-black dark:text-white text-base text-center font-semibold">
        <p>
          &copy; All rights reserved by{" "}
          <span className="text-orange-500 underline">hat-bazar.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
