import Link from "next/link";

const NotFound = () => {
  return (
    <div className="my-10 text-center">
      <Link href={"/"} className="inline-block">
        <button className="btn btn-warning">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
