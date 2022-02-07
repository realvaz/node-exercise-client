import { API_TASK_URL } from '../config/config';

function ToDoList({todos, setTodos}){
    
    const removeTodo = _id => {
        const options = {method: "DELETE"};
        const DELETE_TASK_URL = `${API_TASK_URL}/${_id}`;

        fetch(DELETE_TASK_URL, options)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                setTodos(todos.filter(todo => todo._id !== _id))
            } else {
                alert("No se ha podido eliminar la tarea: " + data.error.message);
            }
        })
        
    };

    const toggleTodo = (e, oldTodo) => {
        if (e.target.tagName === "BUTTON") return;
            
        const toggledTodo = {...oldTodo};
        toggledTodo.completed = !toggledTodo.completed;

        const options = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(toggledTodo)
        };
        const TOGGLE_TASK_URL = `${API_TASK_URL}/${toggledTodo._id}`;

        fetch(TOGGLE_TASK_URL, options)
        .then(response => response.json())
        .then(data => {
            if(data.ok) {
                const newTodos = todos.map(todo => todo._id === data.task._id ? data.task : todo);
                setTodos(newTodos);
            } else {
                alert("No se ha podido actualizar la tarea: " + data.error.message);
            }
        })
    };

    return (
            <ul className="list-group container">
                {
                todos.map((todo, index) => {
                    const {_id, title, completed} = todo;
                    return (
                        <li
                        key={title}
                        className={`list-group-item d-flex justify-content-between ${completed && "completed"}`}
                        onClick={e => toggleTodo(e, todo)}>
                            <span>To-Do {index}: <strong>{title}</strong></span>
                            <button className="btn btn-danger" onClick={() => removeTodo(_id)}>X</button>
                        </li>
                    )
                })}
            </ul>
    );
}

export default ToDoList;