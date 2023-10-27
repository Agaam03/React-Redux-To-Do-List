import "./Components.css";
import React, { useState } from "react";
import { addTodo } from "../Redux/Action/action";
import { useDispatch } from "react-redux";

function InputTodo() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    if (text.trim() !== "") {
      e.preventDefault()
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div className="input-todo">
      <form>
        <input
          type="text"
          placeholder="What to do..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}><box-icon name='plus' animation='spin' ></box-icon></button>
      </form>
    </div>
  );
}
export default InputTodo;
