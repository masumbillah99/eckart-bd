import { FaShippingFast, FaUser } from "react-icons/fa";
import { MdCurrencyExchange } from "react-icons/md";

const HatShipping = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-10 flex flex-col lg:flex-row items-center gap-3">
      <div className="flex items-center gap-5 bg-[#273647] p-5 rounded-lg">
        <div className="bg-orange-500 p-3 rounded-full">
          <FaShippingFast className="w-7 h-7" />
        </div>
        <div className="text-white">
          <h4 className="font-bold uppercase">Free Shipping</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="flex items-center gap-5 bg-[#273647] p-5 rounded-lg">
        <div className="bg-orange-500 p-3 rounded-full">
          <MdCurrencyExchange className="w-7 h-7" />
        </div>
        <div className="text-white">
          <h4 className="font-bold uppercase">Return Exchange</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
      <div className="flex items-center gap-5 bg-[#273647] p-5 rounded-lg">
        <div className="bg-orange-500 p-3 rounded-full">
          <FaUser className="w-7 h-7" />
        </div>
        <div className="text-white">
          <h4 className="font-bold uppercase">24/7 Quality Support</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>
    </section>
  );
};

export default HatShipping;
