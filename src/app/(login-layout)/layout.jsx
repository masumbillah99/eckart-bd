import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const LoginLayout = ({ children }) => {
  return (
    <section>
      <div className="uppercase bg-[#4CB648] text-white text-xs text-center font-bold py-1">
        Welcome to Hat Bazar
      </div>
      <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </section>
  );
};

export default LoginLayout;
