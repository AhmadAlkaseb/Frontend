import React, { useEffect, useState } from "react"

export default({todos,setTodos}) => {

    useEffect(
        () => { 
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setTodos(data);
        })
    }, []);
    
    return (
        <>
        <h1>TodoList</h1>
        <hr/>
        {todos && todos.map((todo) => (
            
            <div key = {todo.id}>
            <p>id: {todo.id}</p>
            <p>title: {todo.title}</p>
            <p>Completed status:</p>
            <input
                        type="checkbox"
                        checked={todo.completed}
                        readOnly
            />
            </div>
        ))}
        </>
      )
}