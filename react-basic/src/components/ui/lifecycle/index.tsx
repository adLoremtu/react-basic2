import React, { useState } from "react";

const LifeCycle = () => {
  // state
  const [isHoge, setIsHoge] = useState(true);
  const [isFuga, setIsFuga] = useState(true);
  const [isPiyo, setIsPiyo] = useState(true);

  // state更新処理
  const toggleIsHoge = () => {
    setIsHoge((prev) => !prev);
  };

  const toggleIsFuga = () => {
    setIsFuga((prev) => !prev);
  };

  const toggleIsPiyo = () => {
    setIsPiyo((prev) => !prev);
  };

  // === 問題5の解答エリア  start ===
  // mounting

  // updating

  // unmounting

  // mounting + updating(all)

  // mounting + updating(hogeのみ)

  // mounting + updating(hoge, fugaのいずれか)
  // === 問題5の解答エリア  end ===

  return (
    <>
      <div>
        <p>isHogeの状態: {isHoge.toString()}</p>
        <button onClick={toggleIsHoge}>isHoge</button>
      </div>
      <div>
        <p>isFugaの状態: {isFuga.toString()}</p>
        <button onClick={toggleIsFuga}>isFuga</button>
      </div>
      <div>
        <p>isPiyoの状態: {isPiyo.toString()}</p>
        <button onClick={toggleIsPiyo}>isPiyo</button>
      </div>
      <div></div>
    </>
  );
};

export default LifeCycle;
