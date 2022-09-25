import React, { useState, useEffect, useRef } from "react";

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

  useEffect(() => {
    console.log("=============== lifecycle start =================");
  });

  // === 問題5の解答エリア  start ===
  // mounting
  useEffect(() => {
    console.log("mounting時に実行");
  }, []);

  // updating
  const isFirst = useRef(false);
  useEffect(() => {
    if (!isFirst.current) {
      isFirst.current = true;
    } else {
      console.log("updating時に実行");
    }
  });

  // unmounting
  useEffect(() => {
    return () => {
      console.log("unmounting時に実行");
    };
  }, []);

  // mounting + updating(all)
  useEffect(() => {
    console.log("変数配列指定なし");
  });

  // mounting + updating(hogeのみ)
  useEffect(() => {
    console.log("isHogeを監視対象とした時");
  }, [isHoge]);

  // mounting + updating(hoge, fugaのいずれか)
  useEffect(() => {
    console.log("isHoge, isFugaを監視対象とした時");
  }, [isHoge, isFuga]);
  // === 問題5の解答エリア  end ===

  useEffect(() => {
    console.log("=============== lifecycle end =================");
  });

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
