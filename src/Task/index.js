import {myTasks} from '../Data/data';
import styles from './App.module.css';
import { useState } from 'react';

export default function Task(props) {
    const [active, setActive] = useState(true);
    let task = props.task;

    function handleClick() {
        setActive(!active);
    }

    return (
        <li 
        className={active ? styles.tasks : styles.cross}
        onDoubleClick={() => {
                console.log(task.name);
        }}
        onClick={handleClick}
        >
            {task.name}
        </li>
    )
}
