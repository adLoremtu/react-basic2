import React from "react";

type Props = {
  count: number;
  addCount: () => void;
};

const CountUpProps = (props: Props) => {
  return (
    <>
      <p>{props.count}</p>
      <button onClick={props.addCount}>+1</button>
    </>
  );
};

export default CountUpProps;
