import React, {useState} from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    function handleAddTask(){
        if(task.trim() === ""){
            return;
        }
        setTasks(t => [...t, task]);
        setTask("");
    }

    function handleRemoveTask(index){
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function handleTaskChange(e){
        setTask(e.target.value);
    }

    function handleMoveTaskUp(index){
        if(index === 0){
            return;
        }
        const newTasks = [...tasks];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index - 1];
        newTasks[index - 1] = temp;
        setTasks(newTasks);
    }

    function handleMoveTaskDown(index){
        if(index === tasks.length - 1){
            return;
        }
        const newTasks = [...tasks];
        const temp = newTasks[index];
        newTasks[index] = newTasks[index + 1];
        newTasks[index + 1] = temp;
        setTasks(newTasks);
    }
    
    return (
        <div className="container">
            <h1>To-Do-List</h1>
            <div>
                <input className="taskInput" type="text" placeholder="Enter Task" value={task} onChange={handleTaskChange} onKeyDown={e => e.key === 'Enter' && handleAddTask()} />
                <button onClick={handleAddTask} className="addTaskButton">Add Task</button>
            </div>

            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {t}
                        <br />
                        <button className="removeTaskButton" onClick={() => handleRemoveTask(index)}>Remove</button>
                        <button className="upButton" onClick={() => handleMoveTaskUp(index)}>Move Up</button>
                        <button className="downButton" onClick={() => handleMoveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;