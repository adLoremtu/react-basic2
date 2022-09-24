import React from "react";

type Props = {
  isLogin: boolean;
  updateLogin: () => void;
};

const ComponentC = (props: Props) => {
  return (
    <>
      <p>component_C.tsx</p>
      <p>ログイン状態：{props.isLogin ? "ログイン済" : "未ログイン"}</p>
      <button onClick={props.updateLogin}>ログイン切替</button>
    </>
  );
};

export default ComponentC;
