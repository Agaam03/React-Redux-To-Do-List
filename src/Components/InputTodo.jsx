import "./Components.css"
import React from 'react'

function InputTodo({onAdd}) {

  return (
    <div className="input-todo">
      <form>
        <input type="text"  placeholder="What to do"/>
        <button >Add</button>
      </form>
    </div>
  )
}

export default InputTodo