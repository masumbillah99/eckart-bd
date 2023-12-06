import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="text-9xl md:text-[250px] font-bold text-[#0A0734] mb-10">
        Oops!
      </h1>
      <p className="text-2xl font-bold uppercase">404 - page not found</p>
      <Link href={"/"} className="inline-block">
        <button className="btn btn-primary uppercase px-16 rounded-xl">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
