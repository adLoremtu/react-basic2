import React, { useState, createContext } from "react";
import ComponentA from "../../ui/context/component_A";

type ContextType = {
  isLogin: boolean;
  updateLogin: () => void;
};

export const UserStatus = createContext({} as ContextType);

const No6 = () => {
  const [isLogin, setIsLogin] = useState(false);

  const updateLogin = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <>
      <h2>問題6:</h2>
      <p>index.tsx</p>
      <UserStatus.Provider value={{ isLogin, updateLogin }}>
        <ComponentA />
      </UserStatus.Provider>
    </>
  );
};

export default No6;
