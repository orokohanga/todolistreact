import {myTasks} from '../Data/data';
import styles from './App.module.css';
import { useState } from 'react';

export default function Task(props) {
    const [task, setTask] = useState(props.task);

    return (
        <li 
        className={styles.tasks}
        onDoubleClick={() => {
                console.log(task.name);
        }}
        >
            {task.name}
        </li>
    )
}
