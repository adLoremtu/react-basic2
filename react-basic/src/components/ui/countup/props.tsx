import React from "react";

const CountUpProps = () => {
  let count = 0;
  const addCount = () => {
    count++;
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={addCount}>+1</button>
    </>
  );
};

export default CountUpProps;
