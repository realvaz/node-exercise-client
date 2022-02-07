import { useState } from 'react';

function NewItem({setTodos}){
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault();
        
        setTodos(todos => [{title: newTodo, completed: false}, ...todos]);

        setNewTodo("");
    }

    const handleNewTodo = (evento)=> setNewTodo(evento.target.value);

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