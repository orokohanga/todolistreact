import styles from './App.module.css';
import Task from '../Task';
import {myTasks} from '../Data/data';

let toto = "Hello toto !!"

function App() {

  return (
    <div className="App">
      <p className={styles.title}>{toto}</p>
      <h1 className={styles.title}>Mes tâches</h1>
      
      <div className={styles.task}>
      {myTasks.map(task =>
      <Task key={task.id} task={task} />)}
      </div>
    </div>
  );
}

export default App;
