import React, { useState } from "react";

const CountUpStates = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}>+1</button>
    </>
  );
};

export default CountUpStates;
