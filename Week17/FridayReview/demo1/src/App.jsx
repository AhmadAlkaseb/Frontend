import React, { useEffect } from 'react';
import './App.css';
import Person from './file';

function App() {  


  const myFirstPerson = new Person("Ahmad A", 25);
  const mySecondPerson = new Person("Youssef B", 18);
  const myThirdPerson = new Person("Hanni C", 25);


  return (
    <>
      <div>{myFirstPerson.greet()}</div>
      <p></p>
      <div>{mySecondPerson.greet()}</div>
      <p></p>
      <div>{myThirdPerson.greet()}</div>
    </>
  );
}

export default App;