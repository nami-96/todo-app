'use client'
import { useState } from 'react';
// import '../styles/globals.css';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 flex-grow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a task"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white p-2 ml-2 rounded"
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded"
            >
              {task}
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white p-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
