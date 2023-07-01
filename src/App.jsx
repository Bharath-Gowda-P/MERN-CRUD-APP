import { useEffect, useState } from "react";
import { List } from "./components/List";
import axios from "axios"

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null)

  const getTasks = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/get`);
      const data = await res.json();
      console.log(data);
      setTasks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async () => {
    try{
      const res = axios.post(`${process.env.REACT_APP_API_URL}/create`, {task: input})
      console.log(res.data)
      setInput("")
      setUpdateUI((prevState) => !prevState)
    }
    catch(error){
      console.log(error)
    }
  }

  const updateMode = (id, text) => {
    console.log(text)
    setInput(text)
    setUpdateId(id)
  }

  const updateTask = async() => {
    try{
      const res = axios.put(`${process.env.REACT_APP_API_URL}/update/${updateId}`, {task: input})
      console.log(res.data)
      setUpdateUI((prevState) => !prevState)
      setUpdateId(null)
      setInput("")
    }
    catch(error){
      console.log(error)
      console.log("Cannot update.")
    }
  }

  useEffect(() => {
    getTasks();
    console.log("URL: ", process.env.REACT_APP_API_URL);
    console.log(tasks);
  }, [updateUI]);

  return (
    <main>
      <h1 className="title">CRUD Operations </h1>

      <div className="input_holder">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={updateId? updateTask : addTask}>{updateId? "Update task" : "Add task"}</button>
      </div>

      <ul>
        {tasks.map((task) => {
          return <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} updateMode={updateMode}/>;
        })}
      </ul>
    </main>
  );
}

export default App;
