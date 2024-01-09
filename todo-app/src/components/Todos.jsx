import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import "./Todos.css";
import CustomCheckbox from "./Checkbox";

export default function FormCheckBox() {
  const [todos, setTodos] = useState([]);
  const [formTitle, setFormTitle] = useState("");
  const [btnState, setBtnState] = useState({ all: true, active: false, completed: false });
  const [count, setCount] = useState(0);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
  
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
  
    setTodos(items);
  };

  const handleInputChange = (e) => {
    setFormTitle(e.target.value);
  };

  const generateId = (array) => {
    if (array.length <= 0) { return 1 };
    const ids = array.map((item) => item.id);
    return Math.max(...ids) + 1;
  }

  const droppableId = uuidv4().toString();

  const defaultBtnState = { all: false, active: false, completed: false, clear: false };

  const handleBtnChange = (e) => {
    const { name } = e.target;

    setBtnState(_ => {
      return { ...defaultBtnState, [name]: true };
    })
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && formTitle.trim() !== "") {
      setTodos(prevTodos => [...prevTodos, { id: generateId(prevTodos), title: formTitle, check: false, completed: false }]);
      handleCount();
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

  const handleCount = () => {
    setCount(todos.filter(todo => !todo.completed).length + 1);
  }

  const handleCountClear = () => {
    setCount(todos.filter(todo => !todo.completed).length);
  }

  const handleClearTodo = () => {
    setTodos(prevTodos => {
      let notCompleted = prevTodos.filter(todo => !todo.completed);
      handleCountClear();
      return notCompleted;
    });
  }

  const handleCountRemove = () => {
    setCount(todos.filter(todo => todo.title).length - 1);
  }

  const handleRemoveTodo = (id) => {
    setTodos(prevTodos => {
      let notMatch = prevTodos.filter(todo => !(todo.id === id));
      return notMatch;
    });
    handleCountRemove();
  };

  useEffect(() => {}, [count]);

  return (
    <>
      <div className="todo-app-container">
        <div className="input-todo-checkbox">
          <div className="icon-check-container">
            <div className="icon-check-circle">
            </div>
            <input
                className="input-checkbox"
                value={formTitle}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
                placeholder="Create a new todo..."
              />
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={droppableId}>
            {(provided) => (
              <div className="checkbox-container" {...provided.droppableProps} ref={provided.innerRef}>
                {todos.filter(todo => {
                  if (btnState.all) {
                    return true;
                  } else if (btnState.active) {
                    return todo.check;
                  } else if (btnState.completed) {
                    return todo.completed;
                  }
                  return false;
                }).map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {(provided) => (
                      <div className="item-list-containter">
                          <div className="todo-list-container" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <CustomCheckbox
                            className="todo-checkbox-element"
                            title={todo.title}
                            check={todo.check}
                            completed={todo.completed}
                            onChange={() => handleCheckboxChange(todo.id)}
                          />
                          <div className="remove-todo" onClick={() => handleRemoveTodo(todo.id)}>X</div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <br className="break-line-checkbox"></br>
      <TodoList count={count} handleBtnChange={handleBtnChange} handleClearTodo={handleClearTodo} />
      </div>
    </>
  );
}