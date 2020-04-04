import React, { useState } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  const initialProducts = [
    {
      id: 1,
      name: 'Eloquent Javascript',
      price: 10,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/5932/9781593279509.jpg',
    },
    {
      id: 2,
      name: 'JavaScript - The Good Parts',
      price: 20,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5965/9780596517748.jpg',
    },
    {
      id: 3,
      name: 'Secrets of the JavaScript Ninja',
      price: 30,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6172/9781617292859.jpg',
    },
  ];

  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [quantity] = useState(1);

  const addToCart = (id) => {
    const singleProduct = products.find((product) => product.id === id);
    const updatedCart = [
      ...cart,
      Object.assign({ qty: quantity }, singleProduct),
    ];
    setCart(updatedCart);
  };

  return (
    <div>
      <div className="container">
        <div className="column">
          <h1>SSJ Shop</h1>
          {products.map((product) => (
            <Products
              id={product.id}
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            >
              <button onClick={() => addToCart(product.id)}>Add to cart</button>
            </Products>
          ))}
        </div>
        <div className="column">
          <h1>Cart</h1>
          {cart.map((item) => (
            <Cart
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              qty={item.qty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
