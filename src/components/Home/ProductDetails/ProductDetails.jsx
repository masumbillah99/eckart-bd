import AddToCartBtn from "@/components/AddToCartBtn/AddToCartBtn";

const ProductDetails = ({ productDetails }) => {
  const { _id, product, company, sub_category, price, stock, rating } =
    productDetails;

  return (
    <div class="lg:w-2/3">
      <h1 class="text-2xl md:text-3xl font-bold text-gray-700">
        {product.title} | {product.color.split(" ")[0]} | {product.model}
      </h1>

      <div class="mt-5 flex flex-col gap-3">
        <p className="text-2xl font-bold">{rating || ""}</p>
        <p className="text-2xl font-bold">TK. {price}</p>
        <p>
          Brand: <span className="text-blue-500">{company.brand}</span>
        </p>
        <p>
          Category: <span className="text-blue-500">{sub_category}</span>
        </p>
        <p>
          Warranty Period:{" "}
          <span className="text-blue-500">{product.warranty}</span>
        </p>
        <p>
          Colors: <span className="text-blue-500">{product.color}</span>
        </p>
        <p className="badge badge-warning p-3">{stock} in stock</p>
        <div className="my-3">
          <AddToCartBtn _id={_id} textSize={"text-xl"} padding={"py-2 px-7"} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
