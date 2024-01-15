import styles from './App.module.css';
import { useState } from 'react';

export default function Task(props) {
    const [active, setActive] = useState(true);
    const [checked, setChecked] = useState(false);
    let task = props.task;

    function handleClick() {
        setActive(false);
        // setChecked(!checked);
        // console.log(task.id);        
    }

    function deleteTask() {
        console.log("delete");
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

        // <div>
        //     <form onSubmit={deleteTask}>
        //     <input type="checkbox" id={task.id} name={task.name} value={task.name} onClick={handleClick} />
        //     <label for={task.id}>{task.name}</label>
        //     <button type="submit">X</button>
        //     </form>
        // </div>
    )
}
