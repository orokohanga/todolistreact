import styles from './App.module.css';
import { useState } from 'react';

export default function Task(props) {
    const [active, cross] = useState(true);

    function handleClick() {
      cross(!active);
    }

    return (
      <>
        <li>
          {props.name}
        </li>
      </>
    )
  }
