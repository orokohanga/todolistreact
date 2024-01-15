import {myTasks} from '../Data/data';
import '../App.css';

let toto = "Hello toto !!"

function App() {
  return (
    <div className="App">
      <p>{toto}</p>
      <ul>
      {myTasks.map(task =>
        <li>{task.name}</li>)
        }
    </ul>
    </div>
  );
}

export default App;
