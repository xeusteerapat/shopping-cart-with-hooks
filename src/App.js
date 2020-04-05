import React from 'react';
import useGlobalState from './hooks/useGlobalState';
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
      qty: 1,
    },
    {
      id: 2,
      name: 'JavaScript - The Good Parts',
      price: 20,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/5965/9780596517748.jpg',
      qty: 1,
    },
    {
      id: 3,
      name: 'Secrets of the JavaScript Ninja',
      price: 30,
      image:
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/6172/9781617292859.jpg',
      qty: 1,
    },
  ];

  const {
    products,
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
    calculatePrice,
  } = useGlobalState(initialProducts);

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
          <h1>Your cart</h1>
          <h2>Total Price: ${calculatePrice()}</h2>
          {cart.map((item) => (
            <Cart
              id={item.id}
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              qty={item.qty}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            >
              <button onClick={() => increaseQty(item.id)}>+</button>
              <button
                disabled={item.qty <= 1}
                onClick={() => decreaseQty(item.id)}
              >
                -
              </button>
            </Cart>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
