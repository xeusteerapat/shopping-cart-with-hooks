import { useState } from 'react';

export default (initialState) => {
  const [products] = useState(initialState);
  const [cart, setCart] = useState([]);

  return {
    products,
    cart,
    setCart,
    addToCart: (id) => {
      const selectedProduct = products.find((product) => product.id === id);
      if (!cart.some((item) => item.id === selectedProduct.id)) {
        const updatedCart = [...cart, selectedProduct];
        setCart(updatedCart);
      } else {
        alert('This product is already in cart, please update qty');
        return;
      }
    },

    increaseQty: (id) => {
      const updateQty = cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updateQty);
    },

    decreaseQty: (id) => {
      const updateQty = cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      );
      setCart(updateQty);
    },

    calculatePrice: () => {
      return cart.reduce((price, item) => price + item.price * item.qty, 0);
    },
  };
};
