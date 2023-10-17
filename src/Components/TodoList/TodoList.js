
const TodoList =({task, index ,updateTask, deleteTask })=>{
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control d-flex justify-content-end" disabled placeholder={task.todo} style={{textDecoration: task.done && 'line-through'}}></input>
            <button className="btn btn-outline-light addButton" type="button" onClick={()=>{updateTask(index)}}>Done</button>
            {/* Change in case if done (ternary operator) */}
            <button className="btn btn-outline-light addButton" type="button" onClick={()=>{deleteTask(index)}}>Delete</button>
        </div>
    )
}

export default TodoList;
