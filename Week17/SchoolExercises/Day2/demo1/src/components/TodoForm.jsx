import React, {useState} from 'react'

const TodoForm = ({todo, setTodo, todos, setTodos}) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        todo.id = todos.length + 1;
        todo.comleted = true;
        setTodos([...todos, todo]);
    }

    //VIGTIGT BEGREB: Lifting state up

    const changeTodo = (event) => {
        setTodo(
            {
                ...todo,  // ... spread operator
                [event.target.id]: event.target.value
            }
        )
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        Title <input id="title" type="text" value={todo.title} placeholder="Write a new todo title" onChange={changeTodo}/><br/>
        User ID <input id="userId" type="text" value={todo.userId} placeholder="Enter a user ID" onChange={changeTodo}/><br/>
        <input type="submit" value="Add todo"/>
        </form>
        </>
    )
}

export default TodoForm;