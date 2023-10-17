import { useState } from "react";

const Form = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
    console.log(event.target.value)
  };
  const inputTextHandler = () => {
    if (newTask.trim() !== '') {
      addTask(newTask);
      console.log(newTask)
      setNewTask('');
    }
  };
  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control d-flex justify-content-end" placeholder="Enter New Task" required value={newTask} onChange={handleInputChange} />
      <button className="btn btn-outline-light addButton" type="button" onClick={inputTextHandler}>+</button>
    </div>
  )
}

export default Form;