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
cart = updateQty(2);
console.log(cart);

// old approach
// const [products] = useState(initialProducts);
// const [cart, setCart] = useState([]);

// const addToCart = (id) => {
//   const selectedProduct = products.find((product) => product.id === id);
//   if (!cart.some((item) => item.id === selectedProduct.id)) {
//     const updatedCart = [...cart, selectedProduct];
//     setCart(updatedCart);
//   } else {
//     alert('This product is already in cart, please update qty');
//     return;
//   }
// };

// const increaseQty = (id) => {
//   const updateQty = cart.map((item) =>
//     item.id === id ? { ...item, qty: item.qty + 1 } : item
//   );
//   setCart(updateQty);
// };

// const decreaseQty = (id) => {
//   const updateQty = cart.map((item) =>
//     item.id === id ? { ...item, qty: item.qty - 1 } : item
//   );
//   setCart(updateQty);
// };

// const calculatePrice = () => {
//   return cart.reduce((price, item) => price + item.price * item.qty, 0);
// };
