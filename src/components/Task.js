import React from 'react';

function Task({ task, toggleTaskCompletion, removeTask }) {
  return (
    <li>
      <input type="checkbox" className='checkbox' checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} disabled={task.completed}/>
      <p className={task.completed ? 'completed' : ''}>{task.content}</p>
      <button className='remove-btn' onClick={() => removeTask(task.id)}>Remove</button>
    </li>
  );
}

export default Task;
