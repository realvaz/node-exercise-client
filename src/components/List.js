function ToDoList({todos, setTodos}){
    console.log("Renderizado");
    const removeTodo  = (title) => {
        setTodos(todos.filter(todo => todo.title !== title));
    };

    const toggleTodo = (e, index) => {
        if (e.target.tagName !== "BUTTON") {
            const newTodos = [...todos];
            newTodos[index].completed = !newTodos[index].completed;
            setTodos(newTodos);
            // setTodos(prevTodos => prevTodos.map((prevTodo, idx) => {
            //     return idx === index ? {...prevTodo, completed: !prevTodo.completed} : prevTodo;
            // }))
            // https://codereview.stackexchange.com/questions/249405/react-hooks-update-array-of-object
        }
    };

    return (
            <ul className="list-group container">
                {
                todos.map(({title, completed}, index) => {
                    return (
                        <li key={title} className={`list-group-item d-flex justify-content-between ${completed && "completed"}`} onClick={(e) => toggleTodo(e, index)}>
                            <span>To-Do {index}: <strong>{title}</strong></span>
                            <button className="btn btn-danger" onClick={() => removeTodo(title)}>X</button>
                        </li>
                    )
                })}
            </ul>
    );
}

export default ToDoList;