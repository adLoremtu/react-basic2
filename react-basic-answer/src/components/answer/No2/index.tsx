import React from "react";
import SampleList from "../../ui/list";

const No2 = () => {
  return (
    <>
      <h2>問題2:</h2>
      {/* === 問題2の解答エリア  start  === */}
      <SampleList name={"ぼん"} age={29} isMen={true}/>
      {/* === 問題2の解答エリア  end  === */}
    </>
  );
};

export default No2;
