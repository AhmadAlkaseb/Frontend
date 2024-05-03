import React, {useState} from 'react'

{/* 1) What is the purpose of the useState hook?
    Mulighed for at kunne en æncre en variabels state
*/}
const Demo = () => {

{/* 2) How can you update a useState variable - and what happens as a result?
    Man bruger set metoden til at ændre variablens state
*/}  

{/* 3) Show how to implement useState */} {/* 4) Show how to initialize a useState variable with a value */} 
const [name, setName] = useState("Ahmad");

  return (
    <div>
      {/* 5) Show how to view the useState variable in jsx*/}
      {name}

      {/* 6) Use of setName*/}
      <button onClick={() => setName("Thomas")}>Change Name to Thomas</button>
    </div>
  )
}

export default Demo