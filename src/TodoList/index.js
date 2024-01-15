import styles from "./App.module.css";
import { myTasks } from "../Data/data";
import addTask from "../Data/data";
import Task from "../Task";
import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState(myTasks);
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTask(name);
    setTasks(name);
    document.querySelector("input").value = "";
  }

  return (
    <div className={styles.task}>
      <div>
        {myTasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })
        }
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">nom</label>
        <input type="input" onChange={handleChange} placeholder="Ajoutez une tâche !" />
        <button type="submit">OK</button>
      </form>
    </div>
  );
}
