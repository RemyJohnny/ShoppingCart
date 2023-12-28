import propTypes from "prop-types";
import { useState } from "react";
import { NavLink, useFetcher } from "react-router-dom";

const Card = ({ product, type, route }) => {
  const [qty, setQty] = useState(1);

  const fetcher = useFetcher();
  const onchange = (e) => {
    setQty(e.target.value);
  };
  switch (type) {
    case "list": {
      return (
        <div className="border hover:shadow-lg transition-shadow ease-in-out w-full flex items-start max-w-5xl rounded-lg font-sans">
          <div className="bg-white min-w-[110px] w-[40%] flex justify-center items-center">
            <img
              src={product.imgSrc}
              alt={`photo of ${product.name}`}
              className=""
            />
          </div>
          <div className=" flex flex-col justify-between h-full py-2 px-4">
            <div className="md:flex md:gap-20 ">
              <div>
                <h1 className=" font-normal md:font-[500] text-slate-900 text-xs md:text-base cursor-pointer">
                  <NavLink to={`${route}/${product.id}`}>
                    {product.name}
                  </NavLink>
                </h1>
                <h4 className=" text-slate-600 text-xs md:text-base">
                  {product.category} from {product.origin}
                </h4>
                <p className=" font-extralight italic cursor-pointer  inline">
                  {product.tag}
                  <Tag />
                </p>
              </div>
              <h1 className=" text-xl font-mono">
                ${product.price.toLocaleString()}
              </h1>
            </div>
            <fetcher.Form
              method="post"
              action="/shop"
              className=" md:flex md:justify-end md:gap-6">
              <input
                type="number"
                name="qty"
                id="qty"
                max={200}
                min={1}
                onChange={(e) => onchange(e)}
                value={qty}
                className="border w-16 p-1 font-light rounded hidden md:inline text-center"
              />
              <input
                type="hidden"
                value={product.id}
                name="id"
                className="hidden"
              />
              <button
                type="summit"
                className="bg-red-800 w-full md:w-fit  md:px-12 py-1 text-white rounded hover:text-red-800 hover:bg-transparent border hover:border-red-800">
                Add to Cart
              </button>
            </fetcher.Form>
          </div>
        </div>
      );
    }
    case "grid": {
      return (
        <div className="border flex flex-col hover:shadow-lg  transition-shadow ease-in-out items-center justify-around max-w-5xl w-72 rounded-lg font-sans">
          <div className="">
            <img
              src={product.imgSrc}
              alt={`photo of ${product.name}`}
              className=""
            />
          </div>
          <div className=" py-2 px-4 w-full">
            <div className="">
              <div>
                <h1 className=" font-normal  text-slate-900 text-xs md:text-base cursor-pointer">
                  <NavLink to={`${route}/${product.id}`}>
                    {product.name}
                  </NavLink>
                </h1>
                <p className=" font-extralight italic cursor-pointer  inline">
                  {product.tag}
                  <Tag />
                </p>
              </div>
              <h1 className=" text-base font-mono">
                ${product.price.toLocaleString()}
              </h1>
            </div>
            <fetcher.Form method="post" className=" ">
              <input
                type="hidden"
                value={product.id}
                name="id"
                className="hidden"
              />
              <input type="hidden" value={1} name="qty" className="hidden" />
              <button
                type="summit"
                className="bg-red-800 w-full  py-1 text-white rounded hover:text-red-800 hover:bg-transparent border-2 hover:border-red-800">
                Add to Cart
              </button>
            </fetcher.Form>
          </div>
        </div>
      );
    }
    default:
      throw new Error("type not found, type can only be <list or grid>");
  }
};

export const Tag = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4 inline">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6z"
      />
    </svg>
  );
};

Card.propTypes = {
  product: propTypes.object.isRequired,
  type: propTypes.string.isRequired,
  route: propTypes.string.isRequired,
};

export default Card;
