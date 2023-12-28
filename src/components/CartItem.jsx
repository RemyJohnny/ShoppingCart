import { useState, useEffect } from "react";
import { Link, Form } from "react-router-dom";
import propTypes from "prop-types";

const CartItem = ({ product, route = "", onChange }) => {
  const [total, setTotal] = useState(product.price);
  const [input, setInput] = useState(product.qty);

  const onchange = (e, type) => {
    if (type === "add") {
      setInput((prev) => {
        const next = parseInt(prev) + 1;
        onChange(product.id, next);
        return next;
      });
    } else if (type === "minus") {
      setInput((prev) => {
        const next = prev > 1 ? prev - 1 : 1;
        onChange(product.id, next);
        return next;
      });
    } else if (type === "input") {
      setInput(() => {
        const value = e.target.value;
        onChange(product.id, value);
        return value;
      });
    }
    // onChange(product.id, input);
  };
  useEffect(() => {
    setTotal(() => product.price * input);
  }, [input]);

  return (
    <div className=" flex border-b pl-2 max-w-2xl font-sans bg-white justify-between w-full">
      <div className="w-[40%] flex justify-center items-center">
        <img src={product.imgSrc} alt={`photo of ${product.name}`} />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className=" flex  justify-between">
          <h1 className="text-sm cursor-pointer ">
            <Link to={`${route}/${product.id}`}>{product.name}</Link>
          </h1>
          <Form method="post">
            <input type="hidden" name="id" value={product.id} />
            <input type="hidden" name="name" value={"delete"} />
            <button
              type="summit"
              className="text-red-600 self-start py-1 px-4 font-bold  mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </Form>
        </div>
        <div className="flex justify-between mr-2">
          <div className=" flex gap-1">
            <button onClick={(e) => onchange(e, "minus")} className="button">
              -
            </button>
            <div className="flex relative items-center justify-center border">
              <div className=" w-10 text-center border h-full flex items-center justify-center">
                <div>{input}</div>
              </div>
              <select
                name="qty"
                onChange={(e) => onchange(e, "input")}
                className=" absolute bg-transparent text-transparent h-full w-full">
                <option className="text-black" value={1}>
                  1
                </option>
                <option className="text-black" value={3}>
                  3
                </option>
                <option className="text-black" value={6}>
                  6
                </option>
                <option className="text-black" value={12}>
                  12
                </option>
                <option className="text-black" value={24}>
                  24
                </option>
              </select>
            </div>
            <button onClick={(e) => onchange(e, "add")} className="button">
              +
            </button>
          </div>
          <h1>@ ${product.price.toLocaleString()}</h1>
        </div>
        <div className=" flex justify-between">
          <h1>
            <strong>
              TOTAL: ${Number(Number(total).toFixed(2)).toLocaleString()}
            </strong>
          </h1>
          <button
            onClick={() => {
              alert("this feature has not yet been implemented");
            }}
            className="text-blue-600  py-1 px-3 mr-2">
            Save for Later
          </button>
        </div>
      </div>
    </div>
  );
};
CartItem.propTypes = {
  product: propTypes.object.isRequired,
  route: propTypes.string,
  onChange: propTypes.func,
};
export default CartItem;
