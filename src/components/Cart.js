import React from 'react';

const Cart = ({ id, name, price, image, qty, children }) => {
  return (
    <div>
      <ul>
        <li>
          <img src={image} alt="" />
          <br />
          {name}
          <br />${price}
          <br />
          In your cart: {qty}
          {children}
          <br />
          Sub total: {price * qty}
        </li>
      </ul>
    </div>
  );
};

export default Cart;
