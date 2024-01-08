import React from "react";
import iconCheck from "../images/icon-check.svg";

export default function Checkbox({ title, check, completed, onChange }) {
  return (
    <>
      <img className={ check ? "icon-check-svg-active" : "icon-check-svg-disable"} src={iconCheck} alt="img"></img>
      <input
        className="todo-checkbox-element"
        type="checkbox"
        checked={check}
        onChange={onChange}
        aria-label={title}
      />
      <span className={completed ? "completed" : ""}>{title}</span>
    </>
  );
}