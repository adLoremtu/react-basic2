import React, { useState } from "react";
import LifeCycle from "../../ui/lifecycle";

const No5 = () => {
  const [isVisible, setIsVisible] = useState(true);
  const changeVisible = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <>
      <h2>問題5:</h2>
      <button onClick={changeVisible}>表示切り替えボタン</button>
      {/* === 問題5の解答エリア  start  === */}
      {isVisible && <LifeCycle />}
      {/* === 問題5の解答エリア  end  === */}
    </>
  );
};

export default No5;
