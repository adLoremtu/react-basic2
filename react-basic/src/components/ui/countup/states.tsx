import React from "react";

const CountUpStates = () => {
  let count = 0;
  const addCount = () => {
    count++;
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}>+1</button>
    </>
  );
};

export default CountUpStates;
