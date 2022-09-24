import React from "react";
import ComponentB from "./component_B";

type Props = {
  isLogin: boolean;
  updateLogin: () => void;
};

const ComponentA = (props: Props) => {
  return (
    <>
      <p>component_A.tsx</p>
      <ComponentB isLogin={props.isLogin} updateLogin={props.updateLogin} />
    </>
  );
};

export default ComponentA;
