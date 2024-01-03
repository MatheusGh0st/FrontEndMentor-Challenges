import React from "react";

export default function Checkbox({ title, check, completed, onChange }) {
  return (
    <div className="todo-checkbox">
      <input
        type="checkbox"
        checked={check}
        onChange={onChange}
        aria-label={title}
      />
      <span className={completed ? "completed" : ""}>{title}</span>
    </div>
  );
}

