import "./Components.css"
import React from 'react'

function FilterTodo({ onFilter }) {
  return (
    <div className="filter-todo">
        <button >All</button>
        <button >Active</button>
        <button >Completed</button>
    </div>
  )
}

export default FilterTodo