import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function FormCheckBox() {
    const [todos, setTodos] = useState([]);
    const [formTitle, setFormTitle] = useState("");

    const handleInputChange = (e) => {
        setFormTitle(e.target.value);
    };

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && formTitle.trim() !== "") {
            setTodos(prevTodos => [...prevTodos, <Checkbox title={formTitle} />]);
            setFormTitle(""); // Clear the form after adding a new todo
        }
    };

    return (
        <div className="todo-checkbox-container">
            <input
                value={formTitle}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                placeholder="Create a new todo..."
            />
            {todos.map((todo, index) => (
                <div className="todo-checkbox" key={index}>{todo}</div>
            ))}
        </div>
    );
}