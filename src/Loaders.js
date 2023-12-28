import {
  getProduct,
  getProducts,
  getCartItems,
  addToCart,
  updateProductInCart,
  deleteProduct,
} from "./goodsDB";

async function productLoader({ params }) {
  const product = await getProduct(params.productId);
  return product;
}
async function productsLoader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");
  const products = await getProducts(searchTerm);
  const CartItems = await getCartItems();
  return [products, CartItems];
}
/* productsLoader(); */
async function cartLoader() {
  const CartItems = await getCartItems();
  return CartItems;
}
async function HomeLoader() {
  const products = await getProducts();
  return products;
}
async function productAction({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(request.url);
  return await addToCart(updates.id, { qty: updates.qty });
}
async function cartAction({ request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  if (updates.name === "update") {
    return await updateProductInCart(updates.id, updates.qty);
  } else if (updates.name === "delete") {
    console.log(updates);
    return await deleteProduct(updates.id);
  }
}

function rootAction({ request }) {
  console.log(request);
}

export {
  productLoader,
  productsLoader,
  cartLoader,
  HomeLoader,
  productAction,
  cartAction,
  rootAction,
};
