import {myTasks} from '../Data/data';
import styles from './App.module.css';

export default function Task() {

    return (
      <>
      <h1 className={styles.title}>Mes tâches</h1>
      <div className={styles.task}>
      {myTasks.map(task =>
        <li 
        onDoubleClick={() => console.log(task.name)}
        key={task.id} 
        className={styles.tasks} 
        id='task'>{task.name}
        </li>
        )}
    </div>
      </>
    )
  }
