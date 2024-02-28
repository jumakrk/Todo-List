import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskManager />
      <ToastContainer />
    </div>
  );
}

export default App;
