import React from "react";

type Props = {
  name: string
  age: number
  isMen: boolean
};

const SampleList = (props: Props) => {
  return (
    <>
      <p>名前：{props.name}</p>
      <p>年齢：{props.age}</p>
      <p>性別：{props.isMen ? '男' : '女'}</p>
    </>
  );
};

export default SampleList;
