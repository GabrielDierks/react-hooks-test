import React, { useReducer } from "react";

import Button from "./utils/Button";

import "../App.css";

const initialState = { dir: "left" };

const reducer = (state, action) => {
  switch (action.type) {
    case "left":
      return { dir: "left" };
    case "right":
      return { dir: "right" };
    default:
      throw new Error();
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer</h1>
      <div className="Gario">
        <div className={state.dir}>θ</div>
      </div>
      <Button clickon={() => dispatch({ type: "left" })}>left</Button>
      <Button clickon={() => dispatch({ type: "right" })}>right</Button>
    </div>
  );
};

export default UseReducer;
