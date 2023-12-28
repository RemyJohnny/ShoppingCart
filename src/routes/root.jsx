import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";

export const Root = () => {
  const [products, CartItem] = useLoaderData();

  return (
    <div>
      <Header cartSize={CartItem.length} />
      <div className=" flex justify-center">
        <Outlet context={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
