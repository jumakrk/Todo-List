import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add a new task..."/>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;
