import React, { useState } from 'react'

const TodoForm = () => {
    const [todoTitle, setTodoTitle] = useState("")

    const handleTodoSubmit = () => {
        if (!todoTitle) 
        return alert("please add a todo title");

    }
  return (
    <div className="form-container">
    <input 
    value={todoTitle}
    onChange={(e) => {
        setTodoTitle(e.target.value)
    }}
    className="form-input" />
    <button 
    onClick={() => {
        handleTodoSubmit();
    }}
    className="form-submit-btn">
        Add todo
    </button>
</div>
  )
}

export default TodoForm