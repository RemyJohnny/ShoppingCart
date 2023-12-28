import { useFetcher, useLoaderData } from "react-router-dom";
import { Tag } from "../components/Card";
import Img from "../components/Img";
import { useState } from "react";

const Product = () => {
  const product = useLoaderData();
  const [qty, setQty] = useState(1);

  const fetcher = useFetcher();
  const onchange = (e) => {
    setQty(e.target.value);
  };

  return (
    <div className=" max-w-6xl py-4">
      <div>
        <div className="flex flex-col justify-center items-center md:flex-row">
          <div className="">
            <Img
              src={product.bigImg}
              width={"250px"}
              height={"250px"}
              magnifierHeight={100}
              magnifierWidth={100}
              zoomLevel={1.5}
            />
          </div>

          <div className=" flex-grow p-2">
            <h1 className="font-normal text-slate-900 text-base md:text-2xl">
              {product.name}
            </h1>
            <h4 className="text-slate-600 text-sm md:text-base">
              {product.category} from {product.origin}
            </h4>
            <div className=" flex justify-between mt-12">
              <div>
                <p className=" font-extralight italic cursor-pointer  inline text-blue-600">
                  {product.tag}
                  <Tag />
                </p>
                <p>
                  {product.size} / {product.alc}
                </p>
              </div>
              <div className="flex flex-col items-end border p-4">
                <h1 className=" text-xl font-mono">
                  ${product.price.toLocaleString()}
                </h1>
                <fetcher.Form
                  method="post"
                  className="flex justify-end gap-2 mt-6">
                  <input
                    type="number"
                    name="qty"
                    onChange={(e) => onchange(e)}
                    max={200}
                    min={1}
                    value={qty}
                    className="border w-16 p-1 font-light rounded  text-center"
                  />
                  <input
                    type="hidden"
                    value={product.id}
                    name="id"
                    className="hidden"
                  />
                  <button
                    type="summit"
                    className="bg-red-800 font-bold text-xs md:text-base   px-8 py-2 text-white rounded-lg hover:text-red-800 hover:bg-transparent border-2 hover:border-red-800">
                    Add to Cart
                  </button>
                </fetcher.Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 p-8 mt-12">
        <h1 className=" text-xl font-sans font-light p-4">Distiller Notes</h1>
        <p className=" text-sm md:text-lg">{product.note}</p>
      </div>

      {/* similar products */}
    </div>
  );
};

export default Product;
