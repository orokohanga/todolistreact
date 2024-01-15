import styles from './App.module.css';
import Task from '../Task';
import { myTasks } from '../Data/data';

let toto = "Hello toto !!"

function App() {


  return (
    <div className="App">
      <p className={styles.title}>{toto}</p>
      <div className={styles.task}>
        <ul>
          {myTasks.map((task) => {
            return (
              <Task key={task.id} task={task} />
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
