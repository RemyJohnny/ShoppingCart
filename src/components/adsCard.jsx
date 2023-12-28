import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { Tag } from "./Card";

const AdsCard = ({ product }) => {
  return (
    <div className="border flex flex-col hover:shadow-lg transition-shadow ease-in-out items-center justify-around max-w-5xl w-72 rounded-lg font-sans">
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
              <Link to={`/shop/${product.id}`}>{product.name}</Link>
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
        <Link to={`/shop/${product.id}`}>
          <div className="bg-red-800 w-full  py-1 text-white rounded hover:text-red-800 hover:bg-transparent border-2 hover:border-red-800 text-center">
            view Product
          </div>
        </Link>
      </div>
    </div>
  );
};
AdsCard.propTypes = {
  product: propTypes.object.isRequired,
};

export default AdsCard;
