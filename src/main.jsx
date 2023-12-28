import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//routes
import Root from "./routes/root";
import ErrorPage from "./routes/ErrorPage";
import Shop from "./routes/shop";
import Product from "./routes/product";
import Cart from "./routes/Cart";
import HomePage from "./routes/homePage";
//loaders
import {
  productsLoader,
  productLoader,
  cartLoader,
  HomeLoader,
  productAction,
  cartAction,
  rootAction,
} from "./Loaders";
//css
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    action: rootAction,
    loader: productsLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: HomeLoader,
        action: productAction,
        element: <HomePage />,
      },
      {
        path: "/shop",
        loader: productsLoader,
        action: productAction,
        element: <Shop />,
      },
      {
        path: "/shop/:productId",
        loader: productLoader,
        action: productAction,
        element: <Product />,
      },
      {
        path: "/cart",
        loader: cartLoader,
        action: cartAction,
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
