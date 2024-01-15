import styles from './App.module.css';
import { myTasks } from '../Data/data';
import Task from '../Task';

export default function TodoList() {
    return (
        <div className={styles.task}>
        <ul>
          {myTasks.map((task) => {
            return (
              <Task key={task.id} task={task} />
            )
          })}
        </ul>
      </div>
    ) 
}

