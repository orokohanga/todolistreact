import {myTasks} from '../Data/data';
import styles from './App.module.css';
import { useState } from 'react';

export default function Task() {
  const [active, setActive] = useState(0)

  function crossTask() {
    
  }

    return (
      <>
      <h1 className={styles.title}>Mes tâches</h1>
      <div className={styles.task}>
      {myTasks.map(task =>
        <li
        onDoubleClick={() => console.log(task.name)}
        key={task.id} 
        className={styles.tasks}
        onClick={crossTask}
        id='task'>{task.name}
        </li>
        )}
    </div>
      </>
    )
  }
