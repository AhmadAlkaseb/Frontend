// Hele filen hedder et modul
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonViewer from './components/PersonViewer'

function App() {
  
  return (
    <>  //Fragment
    <h1>Test</h1>
    <PersonViewer name="Ahmad" age= {9}/>
    <PersonViewer name="Hanni" age= {13}/>
    <PersonViewer name="Youssef" age= {17}/>
    <PersonViewer name="Lasse" age= {21}/>
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