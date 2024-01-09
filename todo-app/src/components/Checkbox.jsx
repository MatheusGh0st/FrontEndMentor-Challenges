import React from "react";
import iconCheck from "../images/icon-check.svg";
import { Checkbox } from 'pretty-checkbox-react';

export default function CustomCheckbox({ title, check, completed, onChange }) {
  return (
    <>
      <img className={ check ? "icon-check-svg-active" : "icon-check-svg-disable"} src={iconCheck} alt="img"></img>
      <Checkbox
        checked={check}
        onChange={onChange}
        aria-label={title}
        >
        <span className={completed ? "completed" : ""}>{title}</span>
      </Checkbox>
    </>
  );
}