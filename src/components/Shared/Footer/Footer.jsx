import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#273647] to-indigo-700 dark:bg-transparent mt-10">
      <section className="max-w-screen-2xl mx-auto">
        <div className="lg:w-[90%] md:[90%] w-full py-6 mx-auto flex flex-col lg:flex-row items-center lg:gap-0 gap-5 lg:justify-between justify-center">
          {/* logo section */}
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="text-2xl text-white font-bold">Hat-Bazar</h1>
            <p className="text-orange-500">
              A trusted institution for authentic products.
            </p>

            <div className="mt-5 flex gap-4">
              <div className="text-white border-2 duration-300 hover:bg-indigo-800 hover:text-white cursor-pointer border-white hover:border-indigo-800 p-3 w-fit rounded-full">
                <Link href={"https://github.com/masumbillah99"} target="_blank">
                  <FaGithub />
                </Link>
              </div>
              <div className="text-white border-2 duration-300 hover:bg-indigo-800 hover:text-white cursor-pointer border-white hover:border-indigo-800 p-3 w-fit rounded-full">
                <Link
                  href={"https://www.linkedin.com/in/mdmasumbillah99"}
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <div className="text-white border-2 duration-300 hover:bg-indigo-800 hover:text-white cursor-pointer border-white hover:border-indigo-800 p-3 w-fit rounded-full">
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
            <h4 className="text-white font-semibold">Contact Info</h4>
            <div className="flex flex-col items-center lg:items-start text-white">
              <div className="my-2">
                <p className="">
                  Phone: <span className="">+8801698765432</span>
                </p>
              </div>
              <div className="my-2">
                <p className="">
                  Email: <span className="">web@hat-bazar.com</span>
                </p>
              </div>
              <div className="my-2">
                <p className="">
                  Address: <span className="">Gulshan, Dhaka, Bangladesh</span>
                </p>
              </div>
              <div className="my-2">
                <p className="">
                  Website:{" "}
                  <span className="">
                    <Link
                      href={"https://hat-bazar.vercel.app"}
                      target="_blank"
                      className="hover:text-orange-500 transition underline"
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
            <h4 className="text-white font-semibold">Useful Links</h4>
            <div className="flex flex-col items-center lg:items-start text-white">
              <div className="my-2">
                <span className="">
                  <Link
                    href={"/about"}
                    target="_blank"
                    className="hover:text-indigo-800 hover:underline transition"
                  >
                    About us
                  </Link>
                </span>
              </div>
              <div className="my-2">
                <span className="">
                  <Link
                    href={"/privacy-policy"}
                    target="_blank"
                    className="hover:text-indigo-800 hover:underline transition"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>
              <div className="my-2">
                <span className="">
                  <Link
                    href={"/terms-condition"}
                    target="_blank"
                    className="hover:text-indigo-800 hover:underline transition"
                  >
                    Terms &amp; Conditions
                  </Link>
                </span>
              </div>
              <div className="my-2">
                <span className="">
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
            <h4 className="font-semibold text-white">Payment With</h4>
          </div>
        </div>

        <div className="py-3 text-white text-center font-semibold">
          <p>
            &copy; All rights reserved by{" "}
            <span className="text-orange-500 underline">hat-bazar.com</span>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
