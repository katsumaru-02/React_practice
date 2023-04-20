import React, { useState } from "react";
import ColorfulMessage from "./compornents/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickFaceButton = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickFaceButton}>顔</button>
      {faceShowFlag && <p>(・ε・)</p>}
    </>
  );
};

export default App;
