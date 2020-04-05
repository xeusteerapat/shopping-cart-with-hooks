import React from 'react';

const Cart = ({ id, name, price, image, qty, increaseQty, decreaseQty }) => {
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
          <button onClick={() => increaseQty(id)}>+</button>
          <button onClick={() => decreaseQty(id)}>-</button>
          <br />
          Sub total: {price * qty}
        </li>
      </ul>
    </div>
  );
};

export default Cart;
