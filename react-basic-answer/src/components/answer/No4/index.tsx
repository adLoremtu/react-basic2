import React, { useState } from "react";
import CountUpProps from "../../ui/countup/props";

const No4 = () => {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h2>問題4:</h2>
      {/* === 問題4の解答エリア  start  === */}
      <CountUpProps count={count} onClick={addCount} />
      {/* === 問題4の解答エリア  end  === */}
    </>
  );
};

export default No4;
