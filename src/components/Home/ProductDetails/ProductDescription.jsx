const ProductDescription = ({ productDetails = { productDetails } }) => {
  const { product, company, features, info, watts, description } =
    productDetails;

  return (
    <div className="p-12 border shadow-lg rounded-lg">
      <div className="">
        <h2 className="text-xl font-semibold text-gray-600">
          Product Details &amp; Specification
        </h2>
        <div className="my-5">
          <h5 className="text-lg font-semibold">Details:</h5>
          <ul className="list-item list-disc ml-5">
            {description.split(",").map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="mt-5">
          <h5 className="text-lg font-semibold mb-5">Specification:</h5>
          <div className="flex flex-col gap-2">
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Title </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {product.title || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Brand </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {company.brand || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Brand Country </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {company.origin_country || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Model </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {product.model || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Warranty Period </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {product.warranty || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Frequency </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {info.frequency || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Volume </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {product.volume || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Capacity </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {product.capacity || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Display </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {info.display_size || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Length </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">
                {info.cable_length || ""}
              </p>
            </div>
            <div className="bg-[#F7F7F7] flex gap-5">
              <p className="w-1/4 py-2 px-5">Watts </p>
              <p className="w-3/4 bg-[#F0F0F0] py-2 px-5">{watts || ""}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
