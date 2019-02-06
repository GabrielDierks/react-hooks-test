import React, { useState } from "react";
import Button from "./utils/Button";

const UseState = () => {
  let [number, setNumber] = useState(0);

  const up = () => {
    setNumber(number + 1);
  };
  const down = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <h1>useState</h1>
      <h1>{number}</h1>
      <Button clickon={up}>up</Button>
      <Button clickon={down}>down</Button>
      <Button clickon={reset}>reset</Button>
    </div>
  );
};

export default UseState;
