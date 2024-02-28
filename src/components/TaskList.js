import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
