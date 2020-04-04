import React from 'react';

const Products = ({ id, name, image, price, children }) => {
  return (
    <div>
      <ul>
        <li>
          <img src={image} alt="" />
          <br />
          {name}
          <br />${price}
          {children}
        </li>
      </ul>
    </div>
  );
};

export default Products;
