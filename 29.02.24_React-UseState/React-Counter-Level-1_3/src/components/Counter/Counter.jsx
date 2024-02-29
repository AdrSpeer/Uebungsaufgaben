import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };
  const minus = () => {
    setCounter(counter - 1);
    counter <= 0 ? setCounter(0) : counter - 1;
    // if (counter <= 0) {
    //   return setCounter(0);
    // }
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <button onClick={add}>+</button>
      <p>{counter}</p>
      <button onClick={minus}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
