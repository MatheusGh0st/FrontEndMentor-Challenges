export default function TodoList({ count, handleBtnChange, handleClearTodo}) {
    return (
        <>
            <section className="todo-list-section">
                <div className="todo-filter-control">
                    <div className="todos-btn">
                        <span>{count} items left</span>
                    <button
                        className="btn-control-todos"
                        name="all"
                        type="button"
                        onClick={handleBtnChange}
                    >All</button>
                    <button
                        className="btn-control-todos"
                        name="active"
                        type="button"
                        onClick={handleBtnChange}
                    >Active</button>
                    <button
                        className="btn-control-todos"
                        name="completed"
                        type="button"
                        onClick={handleBtnChange}
                    >Completed</button>
                    <button
                        className="btn-control-todos"
                        name="clear"
                        type="button"
                        onClick={handleClearTodo}
                    >Clear Completed</button>
                    </div>
                    <span className="span-drag-drop">Drag and drop to reorder list</span>
                </div>
            </section>
        </>
    )
}