import React from "react";
import ButtonModule from "./index.module.scss";

type Props = {
  text: string
};

const SampleButton = () => {
  return (
    <button className={ButtonModule.btn}>ここにボタンのテキストを入れてください。</button>
  );
};

export default SampleButton;
