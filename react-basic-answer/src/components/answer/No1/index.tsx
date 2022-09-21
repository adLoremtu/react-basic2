import React from "react";
import SampleButton from "../../ui/button";

const No1 = () => {
  return (
    <>
      <h2>問題1:</h2>
      {/* === 問題1の解答エリア  start  === */}
      <SampleButton text={"追加"}/>
      <SampleButton text={"変更"}/>
      <SampleButton text={"削除"}/>
      {/* === 問題1の解答エリア  end  === */}
    </>
  );
};

export default No1;
