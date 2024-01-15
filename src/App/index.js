import styles from './App.module.css';
import Task from '../Task';

let toto = "Hello toto !!"

function App() {


  return (
    <div className="App">
      <p className={styles.title}>{toto}</p>
      <Task />
    </div>
  );
}

export default App;
