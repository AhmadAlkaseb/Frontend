// Hele filen hedder et modul
import { Fragment } from 'react'
import React, { useState } from 'react'; 
import './App.css'
import PersonViewer from './components/PersonViewer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [todo, setTodo] = useState({title: '', userId: ''});
  const [todos, setTodos] = useState([]);

  return (
    <>  
    <TodoForm todo={todo} setTodo={setTodo} setTodos={setTodos} todos={todos}/> 
    <TodoList todos={todos} setTodos={setTodos}/>
    <hr />
    <h1>Test</h1>
    <PersonViewer name="Ahmad" age= {9}/>
    </>
  )
}

//Anonyme funktion
const App1 = (props) => {return (<div>{props.name}</div>)}
const App2 = (props) => <div>{props.name}</div>
function App3(props) {
  return (<div>{props.name}</div>)
}
export default App
export {App1, App2, App3}