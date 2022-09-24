import React, { useState } from "react";
import ComponentA from "../../ui/context/component_A";

const ContextSample = () => {
  const [isLogin, setIsLogin] = useState(false);

  const updateLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <h2>問題6:</h2>
      <p>index.tsx</p>
      <ComponentA isLogin={isLogin} updateLogin={updateLogin} />
    </>
  );
};

export default ContextSample;
