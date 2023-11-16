import shopping from "@/assets/slider/slider2.webp";
import Image from "next/image";

const ExploreHome = () => {
  return (
    <section className="max-w-screen-xl mx-auto my-20 hero gap-5">
      <div className="hero-content flex-col lg:flex-row items-center justify-center">
        <div className="">
          <Image
            src={shopping}
            className="max-w-md md:max-w-xl xl:max-w-2xl rounded-lg"
            alt="shopping-img"
          />
        </div>
        <div className="ml-0 md:ml-16">
          <h1 className="text-5xl font-bold leading-tight">
            Your Shopping in Hat-Bazar
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Explore more</button>
        </div>
      </div>
    </section>
  );
};

export default ExploreHome;
