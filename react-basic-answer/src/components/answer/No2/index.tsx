import React from "react";
import SampleList from "../../ui/list";

const No2 = () => {
  const name = "ボン";
  const age = 29;
  const isMen = true;

  return (
    <>
      <h2>問題2:</h2>
      {/* === 問題2の解答エリア  start  === */}
      <SampleList name={name} age={age} isMen={isMen} />
      {/* === 問題2の解答エリア  end  === */}
    </>
  );
};

export default No2;
