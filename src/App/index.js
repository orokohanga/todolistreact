import styles from './App.module.css';
import TodoList from '../TodoList/index';


function App() {
  let toto = "Hello toto !!"
  
  return (
    <div className="App">
      <p className={styles.title}>{toto}</p>
      <TodoList />
    </div>
  );
}

export default App;
