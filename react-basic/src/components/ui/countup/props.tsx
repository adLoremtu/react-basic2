import React from "react";

type Props = {
  count: number;
  onClick: () => void;
};

const CountUpProps = () => {
  return (
    <>
      <p>ここにカウント数を表示してください。</p>
      <button>+1</button>
    </>
  );
};

export default CountUpProps;
