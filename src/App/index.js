import styles from './App.module.css';
import TodoList from '../TodoList/index';
import {useState} from 'react';
import addTask from '../Data/data'

let toto = "Hello toto !!"

function App() {

  const [name,setName] = useState("")

  function handleChange(event){
    setName(event.target.value)
    }

    function handleSubmit(event){
    event.preventDefault();
    addTask(name);
    }
    
  return (
    <div className="App">
      <p className={styles.title}>{toto}</p>
      <TodoList />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">nom</label>
        <input type="input" onChange={handleChange}/>
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

export default App;
