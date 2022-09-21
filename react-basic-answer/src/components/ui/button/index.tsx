import React from "react";
import ButtonModule from "./index.module.scss";

type Props = {
  text: string
};

const SampleButton = (props: Props) => {
  return (
    <button className={ButtonModule.btn}>{props.text}</button>
  );
};

export default SampleButton;
