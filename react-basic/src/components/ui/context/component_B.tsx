import React from "react";
import ComponentC from "./component_C";

type Props = {
  isLogin: boolean;
  updateLogin: () => void;
};

const ComponentB = (props: Props) => {
  return (
    <>
      <p>component_B.tsx</p>
      <ComponentC isLogin={props.isLogin} updateLogin={props.updateLogin} />
    </>
  );
};

export default ComponentB;
