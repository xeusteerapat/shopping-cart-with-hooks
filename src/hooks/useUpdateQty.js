import { useState } from 'react';

const useHandleQty = (qty) => {
  const [count, setCount] = useState(qty);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return [count, increment, decrement];
};

export default useHandleQty;
