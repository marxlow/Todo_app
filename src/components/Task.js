import React from 'react';

const Task = ({ task, handleDelete, handleToggleComplete }) => (
  <li className={`flex-container ${task.taskCompleted ? 'completed' : ''}`}>
    <p className="m-a-1">{task.taskIndex}: {task.taskName}</p>
    <button onClick={() => handleDelete(task.taskIndex)}> Delete </button>
    <button onClick={() => handleToggleComplete(task.taskIndex)}> Complete </button>
  </li>
);

export default Task;
