import { useState } from 'react'

import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main-container">
    <h1 style={{
      fontSize: "2.5rem",
      marginBottom: "2rem"
    }}> My Todo List</h1>
    <TodoForm/>
    <TodoList/>
  </div>
  )
}

export default App
