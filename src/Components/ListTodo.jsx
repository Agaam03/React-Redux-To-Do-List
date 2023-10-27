import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../Redux/Action/action";
import "./Components.css";
import React, { useState } from "react";

function ListTodo() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const [filter, setFilter] = useState("SHOW_ALL");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "SHOW_COMPLETED") {
      return todo.completed;
    } else if (filter === "SHOW_ACTIVE") {
      return !todo.completed;
    }
    return true;
  });

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleToogle = (id) => {
    dispatch(toggleTodo(id));
  };
  const handleEdit = (id, text) => {
    dispatch(editTodo(id, text));
  };

  return (
    <div>
      <div className="filter-todo">
        <button onClick={() => setFilter("SHOW_ALL")}>All</button>
        <button onClick={() => setFilter("SHOW_ACTIVE")}>Active</button>
        <button onClick={() => setFilter("SHOW_COMPLETED")}>Completed</button>
      </div>
      {filteredTodos.map((todo) => (
        <div className="list-todo" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToogle(todo.id)}
          />
          <span
            style={todo.completed ? { textDecoration: "line-through" } : {}}
          >
            {todo.text}
          </span>
          <div className="btn-list">
            <button
              onClick={() =>
                handleEdit(todo.id, prompt("Edit Todo:", todo.text))
              }
            >
              <box-icon type="solid" name="pencil"></box-icon>
            </button>
            <button onClick={() => handleDelete(todo.id)}>
              <box-icon type="solid" name="trash-alt"></box-icon>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ListTodo;
