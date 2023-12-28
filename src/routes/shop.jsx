import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const Shop = () => {
  const [products] = useLoaderData();
  const [viewType, setViewType] = useState("grid");
  const ToggleView = () => {
    if (viewType === "grid") setViewType("list");
    else setViewType("grid");
  };
  return (
    <div className="p-4">
      <button onClick={() => ToggleView()}>
        {viewType === "grid" ? (
          <FontAwesomeIcon icon={faList} className=" shadow p-1" />
        ) : (
          <FontAwesomeIcon icon={faGrip} className=" shadow p-1" />
        )}
      </button>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((item) => {
          return (
            <Card product={item} type={viewType} key={item.id} route="/shop" />
          );
        })}
      </div>
    </div>
  );
};
export default Shop;
