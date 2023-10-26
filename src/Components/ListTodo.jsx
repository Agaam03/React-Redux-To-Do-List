import "./Components.css";
import React from "react";

function ListTodo({ todo, onDelete, onEdit, onToggle }) {
  return (
    <div>
      <div className="list-todo">
        <input type="checkbox" />
        <div>Push Conqu</div>
        <div className="btn-list">
          <button>
            <box-icon type="solid" name="pencil"></box-icon>
          </button>
          <button>
            <box-icon type="solid" name="trash-alt"></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListTodo;
