import { v4 as uuid } from "uuid";
import { matchSorter } from "match-sorter";
import localforage from "localforage";

function makeProduct(name, category, origin, price, size, tag, alc, note) {
  let id = uuid();
  let imgSrc = `/assets/image/${name}.jpg`;
  let bigImg = `/assets/image/${name} Big.jpg`;
  let qty = 1;
  return {
    name,
    category,
    origin,
    price,
    size,
    tag,
    alc,
    id,
    qty,
    imgSrc,
    bigImg,
    note,
  };
}
const Products = [
  makeProduct(
    "Hennessy XO Cognac",
    "Cognac",
    "France",
    279.99,
    "750ML",
    "Cognac",
    "40% ABV",
    `Created in 1870 by Maurice Hennessy, Hennessy XO was originally reserved for the private use of the Hennessy family and their closest friends. XO stands for “extra old” referring to the eaux-de-vie that have been carefully selected and aged, resulting in a cognac that is powerful, rich and undeniably rare.

    Intense and deep amber color with a velvety texture. The first wave, is rich in dried fruit aromas then evolving to a denser note of chocolate and black pepper. Generous scents of crystallized fruit, oak, and spices, fall into place very distinctly A harmony of candied fruit and light spice notes. A smooth, full sensation gives a simultaneously powerful and soft tonality with a hint of cocoa. A warm fruity presence and tremendous length on the palate.`
  ),
  makeProduct(
    "Jameson Irish Whiskey",
    "Irish Whiskey",
    "Ireland",
    32.97,
    "750ML",
    "whiskey",
    "40% ABV",
    `2021 San Francisco World Spirits Competition Double Gold Medal Winner

    To the nose, Jameson is clearly a mellow pot still whiskey with toasted wood and sherry undertones. Jameson's taste is distinctively smooth and sweet with mild woody and nutty notes. Incredibly smooth is the only way to describe the finish.
    
    Proof: 80`
  ),
  makeProduct(
    "Clase Azul Reposado Tequila",
    "Tequila Reposado",
    "Mexico",
    172.97,
    "750ML",
    "Tequila",
    "40% ABV",
    `Intense amber in color, the Clase Azul Reposado presents aromas of wood, vanilla and toffee caramel. On the palate, it is silky, rich and smooth, offering notes of cooked agave, wood and vanilla.

    Proof: 80`
  ),
  makeProduct(
    "Grey Goose Vodka",
    "Straight Vodka",
    "France",
    40.97,
    "750ML",
    "vodka",
    "40% ABV",
    `Grey Goose Vodka has an exquisite clear, fresh and elegantly aromatic taste. This is a premium vodka of unparalleled smoothness and exceptional taste, with subtle hints of almond and a long, satisfying finish.

    Grey Goose Vodka is a premium vodka, born of an extraordinary passion for spirit-making. It is created using only the finest French ingredients – the highest-grade wheat and pristine limestone-filtered spring water. It is a spirit of uncommon brilliance, unrivaled craftsmanship and signature smoothness and is an excellent choice as a gift.`
  ),
  makeProduct(
    "Dom Perignon Vintage with Gift Box 2013",
    "Vintage Sparkling Wine",
    "Champagne, France",
    311.97,
    "750ML",
    "Champagne",
    "12.5% ABV",
    `The delicate nose unfolds in swaths of color. The green of eucalyptus, mint and vetiver, the yellow-orange of mirabelle plums, apricot and orange blossom, the brown of pepper, cardamom and licorice sticks, and finally silvery saline and toasty hues.

    The mouthfeel is elegant, expressing luxuriant simplicity and precision. The attack is enveloping and ethereal. The refined and silky foundation becomes more pronounced at the heart. The finish is dominated by a salinity that leaves a deep sensation of consistency.`
  ),
  makeProduct(
    "The Macallan 30 Year Double Cask Single Malt Scotch Whisky with Gift Box",
    "Single Malt Scotch Whisky",
    "Highland, Scotland",
    5499.97,
    "750ML",
    "whiskey",
    "43% ABV",
    `A perfectly balanced single malt matured for 30 years in sherry seasoned American and European oak casks. The Double Cask range tells the story of an incredible wood journey, from the vast green forests of northern Spain and the French Pyrenees and the lush forests of Ohio, Missouri and Kentucky, to create the perfect harmony.
  Golden acorn and 100% natural color. Aromas of fresh honeycomb, sweet toffee, red apple, fig and vanilla pod. On the palate, a smooth melody of cinnamon, ginger, Madagascan vanilla, dried fruits and oak. Finishes with sweet oak, soft spice and toffee.`
  ),
];

const addProductToDB = async () => {
  //let CartItems = /*  await localforage.getItem("cartItems") */ [];
  // if (!CartItems) CartItems = [];
  await localforage.setItem("products", Products);
  //await localforage.setItem("cartItems", CartItems);
  // console.log(CartItems);
  console.log("called"); /*  */
};
addProductToDB();

async function getProducts(query) {
  let products = await localforage.getItem("products");

  if (query) {
    console.log("you search for" + query);
    products = matchSorter(products, query, {
      keys: ["name", "category", "origin", "tag"],
    });
    console.log("you search for " + query + "am your result is " + products);
  }
  if (!products) products = [];
  return products;
}

async function getProduct(id) {
  let products = await localforage.getItem("products");
  let product = products.find((product) => product.id === id);
  console.log(product.id);
  return product ?? null;
}

async function deleteProduct(id) {
  let products = await localforage.getItem("cartItems");
  console.log(products);
  products = products.filter((product) => product.id !== id);
  console.log(await localforage.setItem("cartItems", products));
  return await localforage.setItem("cartItems", products);
}
async function getCartItems() {
  let cartItems = await localforage.getItem("cartItems");
  return cartItems;
}
async function addToCart(id, { qty }) {
  let products = await localforage.getItem("products");
  let CartItems = await localforage.getItem("cartItems");
  let item = products.find((item) => item.id === id);
  if (!item) throw new Error("No product found for", id);
  let itemInCart = CartItems.find((i) => i.id === item.id);
  if (itemInCart) {
    if (
      confirm("this item is already in your Cart\nDo you want to add another?")
    ) {
      itemInCart.qty++;
      console.log(CartItems);
    } else return item;
  } else {
    //Object.assign(item, qty);
    item.qty = qty;
    CartItems.push(item);
    console.log(CartItems);
  }

  return await localforage.setItem("cartItems", CartItems);
}

async function updateProductInCart(id, qty) {
  console.log("updating...");
  let items = await localforage.getItem("cartItems");
  let item = items.find((item) => item.id === id);
  if (!item) throw new Error("No product found for", id);
  item.qty = qty;
  return await localforage.setItem("cartItems", items);
}

/* function ifExist(arr, id) {
  let item = arr.find((item) => item.id === id);
  return item;
} */
export {
  getProducts,
  getProduct,
  deleteProduct,
  getCartItems,
  addToCart,
  updateProductInCart,
};
