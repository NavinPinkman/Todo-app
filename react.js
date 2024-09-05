import React from 'react'
import { useState } from 'react'
import './App.css'

let counter = 4;
function App() {
  const [Todos , setTodos] = useState([{
    id :1 ,
    title : "Hello world",
    description : "Mern stack developers"
  },
  {
    id : 2,
    title : "Hello world2",
    description : "Full stack developers"
  },
  {
    id : 3,
    title : "Hello world3",
    description : "Software developers"
  }])

  function addTodo(){
    setTodos([...Todos,{
      id : counter++,
      title : "Game of Thrones",
      description : "best series"
    }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a Todo</button>
      {Todos.map(function(todo){
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
  
}
function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
