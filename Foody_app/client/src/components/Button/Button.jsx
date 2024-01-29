import "./Button.css";
import data from "../../data.js";

export const Button = (props) => {
  return (
    <>
      <button onClick={props.fxn}>{props.name}</button>
    </>
  );
};
