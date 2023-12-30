/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import CartItem from "../components/CartItem";
import propTypes from "prop-types";
import { useLoaderData, useSubmit } from "react-router-dom";

let promoUsed = false;

const Cart = () => {
  const goods = useLoaderData();
  const [promo, setPromo] = useState("");
  //const [promoUsed, setPromoUsed] = useState(false);
  const [products, setProduct] = useState(goods);
  const [TotalPrice, setTotalPrice] = useState(0);

  const submit = useSubmit();

  useEffect(() => {
    setProduct(goods);
  }, [goods]);

  const applyBtn = useRef(Element || null);

  useEffect(() => {
    let totalPrice = () => {
      return products.reduce(
        (total, product) => total + product.price * product.qty,
        0
      );
    };
    if (promoUsed) {
      const percent = (15 * totalPrice()) / 100;
      console.log(totalPrice());
      setTotalPrice(totalPrice() - percent);
    } else setTotalPrice(totalPrice);
  }, [products]);

  /*   useEffect(() => {
    console.log("useEffect ran for total price");
    setTotalPrice(totalPrice);
  }, [totalPrice]); */

  const onClickApplyPromo = () => {
    if (promo === "Remy000" && !promoUsed) {
      const percent = (15 * TotalPrice) / 100;
      setTotalPrice(TotalPrice - percent);
      //setPromoUsed(true);
      promoUsed = true;
    }
  };

  const onchange = (id, qty) => {
    let formData = new FormData();
    formData.append("id", id);
    formData.append("qty", qty);
    formData.append("name", "update");
    // console.log(Object.fromEntries(formData));
    submit(formData, { method: "POST", action: "/cart" });
    setProduct(
      products.map((item) => {
        if (item.id === id) {
          item.qty = qty;
        }
        return item;
      })
    );
  };

  promo && !promoUsed
    ? (applyBtn.current.disabled = false)
    : (applyBtn.current.disabled = true);

  const handlePromo = (e) => {
    setPromo(e.target.value);
  };

  return (
    <div className=" flex flex-col md:flex-row min-h-screen md:items-start gap-3 bg-slate-50 w-full h-full py-4 justify-center">
      <div className=" flex flex-col items-center rounded-lg p-2 bg-white shadow ">
        <div className="border-b font-semibold text-xl w-full text-center py-2 ">
          SHOPPING CART{` (${products.length})`}
        </div>
        {products.map((item) => {
          return (
            <CartItem
              product={item}
              key={item.id}
              onChange={onchange}
              route="/shop"
            />
          );
        })}
      </div>

      <div className="flex flex-col items-center rounded-lg p-6 bg-white shadow gap-2 sticky top-0">
        <h1 className=" border-b font-semibold text-xl w-full text-center pb-2">
          ORDER SUMMARY
        </h1>
        <label htmlFor="promo">
          {!promoUsed ? (
            <>
              <span className=" text-xs text-slate-600 block">
                Enter Promo Code (one code maximum)
              </span>
              <div className=" relative border">
                <input
                  value={promo}
                  type="text"
                  onChange={(e) => handlePromo(e)}
                  className=" border p-2 focus:outline-blue-600"
                />

                <div onClick={onClickApplyPromo}>
                  <button
                    disabled
                    ref={applyBtn}
                    className=" absolute right-1 top-3 font-semibold hover:text-green-600 text-blue-600 disabled:text-slate-300 cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div> promo code used</div>
          )}
        </label>
        <div className=" flex justify-between w-full">
          <p>
            <strong>Total</strong>
          </p>
          <p>
            <strong>${TotalPrice.toLocaleString()}</strong>
          </p>
        </div>
        <button className=" w-full bg-red-800 text-white rounded transition-all hover:text-lg py-4 hover:font-extrabold">
          Check Out
        </button>
      </div>
    </div>
  );
};

Cart.prototype = {
  products: propTypes.array.isRequired,
};

export default Cart;
