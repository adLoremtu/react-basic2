import React from "react";

type Props = {
  count: number;
  onClick: () => void;
};

const CountUpProps = (props: Props) => {
  return (
    <>
      <p>{props.count}</p>
      <button onClick={props.onClick}>+1</button>
    </>
  );
};

export default CountUpProps;
