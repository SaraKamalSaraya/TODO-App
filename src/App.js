import './App.css';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { useState } from "react";
import Form from './Components/Form/Form';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, { todo: newTask, done: false, }])
  }

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks)
  }
// splice ... set task

  const updateTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return {...task, done: !task.done}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  console.log(tasks)
  return (
    <div className="App">
      <h1 className="fw-bold pb-3">ToDo App!</h1>
      <Form addTask={addTask} className="pb-5" />
      <h3 className="fw-bold py-5">Let's Get Some Work Done!</h3>
      {
        tasks.map((task, index) => {
          return (
            <div key={index}>
              <TodoList task={task} index={index} updateTask={updateTask} deleteTask={deleteTask}/>
            </div>
          )

        })
      }

    </div>
  );
}

export default App;
