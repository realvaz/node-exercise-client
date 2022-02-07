import {useState, useEffect} from "react";

import List from "./components/List";
import NewItem from "./components/NewItem";

import { API_TASK_URL } from "./config/config";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(API_TASK_URL)
      .then(response => response.json())
      .then(data => setTodos(data.tasks));
  }, []);

  return (
    <div className="App">
      <NewItem setTodos={setTodos}/>
      <List setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
