import { Button } from "../Button/Button";
import "./Navbar.css";

export const Navbar = (props) => {
  return (
    <div className="top_container">
      <div className="common_container">
        <img src="/logo.svg" alt="logo" />

        <input id="searchItem" type="text" placeholder="Search Food.." />
      </div>
      <div className="btn">
        <Button fxn={props.fxnAll} name="All" />
        <Button fxn={props.fxnAni} name="Aniversary" />
        <Button fxn={props.fxnBir} name="Birthday" />
        <Button fxn={props.fxnPro} name="Program" />
      </div>
    </div>
  );
};
