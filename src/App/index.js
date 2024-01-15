import styles from './App.module.css';
import TodoList from '../TodoList/index';

let toto = "Hello toto !!"

function App() {
    
  return (
    <div className="App">
      <p className={styles.title}>{toto}</p>
      <TodoList />
    </div>
  );
}

export default App;
