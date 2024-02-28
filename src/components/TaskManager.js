// TaskManager.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskInput from './TaskInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTaskContent) => {
    setTasks([...tasks, { id: Date.now(), content: newTaskContent, completed: false }]);
    toast.success('Task added!');
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    toast.info('Task completed!');
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.error('Task removed!');
  };

  return (
    <>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        removeTask={removeTask}
      />
    </>
  );
}

export default TaskManager;
