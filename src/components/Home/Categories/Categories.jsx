import { productCategories } from "@/utils/productsApis";
import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const allCategories = await productCategories();

  return (
    <section className="max-w-screen-xl mx-auto my-20">
      <h2 className="text-3xl font-semibold mb-10">Product Categories</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {allCategories &&
          allCategories?.map(({ _id, name, path, imgUrl }) => (
            <Link
              href={`/category/${path}`}
              key={_id}
              className="flex flex-col items-center gap-3 hover:text-blue-500 mb-7"
            >
              <Image
                src={imgUrl}
                className="w-24 h-24 lg:w-40 lg:h-40 border-2 p-3 rounded-full cursor-pointer"
                alt="product-img"
                width={100}
                height={100}
              />
              <p className="font-semibold cursor-pointer">{name}</p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Categories;
