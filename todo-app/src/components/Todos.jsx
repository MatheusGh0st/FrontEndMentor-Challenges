import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function FormCheckBox() {
  const [todos, setTodos] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const [btnState, setBtnState] = useState({ all: true, active: false, completed: false });

  const handleInputChange = (e) => {
    setFormTitle(e.target.value);
  };

  const generateId = (array) => {
    if (array.length <= 0) { return 1 };
    const ids = array.map((item) => item.id);
    return Math.max(...ids) + 1;
  }

  const defaultBtnState = { all: false, active: false, completed: false };

  const handleBtnChange = (e) => {
    const { name } = e.target;

    setBtnState(_ => {
      return { ...defaultBtnState, [name]: true };
    })
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && formTitle.trim() !== "") {
      setTodos(prevTodos => [...prevTodos, { id: generateId(prevTodos), title: formTitle, check: false }]);
      setFormTitle(""); // Clear the form after adding a new todo
    }
  };

  const handleCheckboxChange = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, check: !todo.check, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
      <div className="todo-checkbox-container">
        <input
          value={formTitle}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Create a new todo..."
        />

        {todos.filter(todo => {
          if (btnState.all) {
            return true;
          } else if (btnState.active) {
            return todo.check;
          } else if (btnState.completed) {
            return todo.completed;
          }
        }).map((todo, index) => (
          <Checkbox
            key={index}
            title={todo.title}
            check={todo.check}
            completed={todo.completed}
            onChange={() => handleCheckboxChange(todo.id)}
          />
        ))}
      </div>
      <div className="todos-btn">
        <button
          name="all"
          type="button"
          onClick={handleBtnChange}
        >All</button>
        <button
          name="active"
          type="button"
          onClick={handleBtnChange}
        >Active</button>
        <button
          name="completed"
          type="button"
          onClick={handleBtnChange}
        >Completed</button>
      </div>
    </>
  );
}