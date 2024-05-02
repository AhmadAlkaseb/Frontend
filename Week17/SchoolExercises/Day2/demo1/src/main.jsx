import React from 'react'
import ReactDOM from 'react-dom/client'
import App, {App1, App2, App3} from './App.jsx'
import BookApp from './components/BookApp.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />
    <App1 name = "App1"/>
    <App2 name = "App2"/>
    <App3 name = "App3"/>*/}
  <BookApp />
  </React.StrictMode>,
)