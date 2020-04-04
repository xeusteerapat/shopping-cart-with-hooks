import React from 'react';
import useUpdateQty from '../hooks/useUpdateQty';

const Cart = ({ id, name, price, image, qty }) => {
  const [count, increment, decrement] = useUpdateQty(qty);
  return (
    <div>
      <ul>
        <li>
          <img src={image} alt="" />
          <br />
          {name}
          <br />${price}
          <br />
          In your cart: {count}
          <button onClick={() => increment(qty)}>+</button>
          <button onClick={() => decrement(qty)}>-</button>
          <br />
          Sub total: {price * count}
        </li>
      </ul>
    </div>
  );
};

export default Cart;
