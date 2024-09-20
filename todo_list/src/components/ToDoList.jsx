import React, { useState } from 'react'

function ToDoList(){
    
    const [tasks, setTasks] = useState(['Eat Breafast']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]); //using t because it's a past version of the element
            setNewTask("");
        }
       
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index); //need to change i here because of naming conflict with index and the under score is to ignore that
        //i !== index if those two match it will filter out
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){

        if(index > 0){ //this checks if it's on top
            const updatedTasks = [...tasks]; //spreads current task to create a new updatedTasks array to work with
            [updatedTasks[index], updatedTasks[index - 1]] = //review array destructing
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){ //if element is at the bottom you don't want it to move more down
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return( //this is the JXML / HTML of the program
    <div className="to-do-list">

        <h1>To-Do List</h1>

        <div>
            <input
                type="text"
                placeholder="Enter a task . . ."
                value={newTask}
                onChange={handleInputChange}
            />
            <button
                className="add-button"
                onClick={addTask}>
                Add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button
                        className="move-botton"
                        onClick={() => moveTaskUp(index)}>
                        👆
                    </button>
                    <button
                        className="move-botton"
                        onClick={() => moveTaskDown(index)}>
                        👇
                    </button>
                </li>
            )}
        </ol>
    
    
    
    
    
    </div>)
}

export default ToDoList