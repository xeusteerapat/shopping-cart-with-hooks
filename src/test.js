let products = [
  {
    id: 1,
    name: 'Nike',
    price: 10,
  },
  {
    id: 2,
    name: 'Adidas',
    price: 15,
  },
  {
    id: 3,
    name: 'Reebok',
    price: 20,
  },
];

let cart = [];

const addToCart = (id) => {
  const selectedProduct = products.find((product) => product.id === id);
  const updatedCart = [...cart, selectedProduct];
  return updatedCart;
};

const updateQty = (id) => {
  let updatedProducts = products.map((product) =>
    product.id === id ? { ...product, price: product.price * 2 } : product
  );
  return updatedProducts;
};

cart = addToCart(2);
cart = addToCart(2);
console.log(cart);
