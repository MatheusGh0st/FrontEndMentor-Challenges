import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default function FormCheckBox() {
    const [todos, setTodos] = useState([]);
    const [formTitle, setFormTitle] = useState("");
    const [btnState, setBtnState] = useState({ all: false, active: false, completed: false });

    const handleInputChange = (e) => {
        setFormTitle(e.target.value);
    };

    const handleBtnChange = (e) => {
        const { name } = e.target;

        setBtnState(prevBtnState => {
            return { ...prevBtnState, [name]: true };
        })
    }

    const handleKeyUp = (e) => {
        if (e.key === 'Enter' && formTitle.trim() !== "") {
            setTodos(prevTodos => [...prevTodos, <Checkbox title={formTitle} />]);
            setFormTitle(""); // Clear the form after adding a new todo
        }
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

                { todos.map((todo, index) => (
                    <div className="todo-checkbox" key={index}>{todo}</div>
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