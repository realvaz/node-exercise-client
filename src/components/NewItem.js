import { useState } from 'react';
import { API_TASK_URL } from '../config/config';

function NewItem({setTodos}){
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: newTodo})
        };

        fetch(API_TASK_URL, options)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                setTodos(todos => [...todos, data.task]);
                setNewTodo("");
            } else {
                alert("No se ha podido crear la tarea: " + data.error.message);
            }
        });
    }

    const handleNewTodo = event => setNewTodo(event.target.value);

    return(
        <form onSubmit={handleSubmit} className="form-group container">
            <h1 className="my-4">Todo List</h1>
            <input
                className="form-control mb-3"
                type="text"
                value={newTodo}
                placeholder="Introduce un nuevo To-do"
                onChange={handleNewTodo}
            />
        </form>
    )
}

export default NewItem;