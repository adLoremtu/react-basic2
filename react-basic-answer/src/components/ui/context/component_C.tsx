import React, { useContext } from "react";
import { UserStatus } from "../../answer/No6";

const ComponentC = () => {
  const { isLogin, updateLogin } = useContext(UserStatus);
  return (
    <>
      <p>component_C.tsx</p>
      <p>ログイン状態：{isLogin.toString()}</p>
      <button onClick={updateLogin}>ログイン切替</button>
    </>
  );
};

export default ComponentC;
