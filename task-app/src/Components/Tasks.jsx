import React, { useEffect, useState } from "react";
import '../App.css';

const API_URL = "http://localhost:3001/tasks";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const loadTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTask }),
    });

    setNewTask(""); // Clear input
    loadTasks();    // Reload list
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
   <div className="max-w-xl mx-auto mt-10 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl">
  
  {/* Add Task Form */}
  <form onSubmit={addTask} className="flex mb-6 shadow-sm rounded-lg overflow-hidden">
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      placeholder="Enter a new task"
      className="flex-1 p-3 border border-gray-200 focus:border-blue-400 focus:ring focus:ring-blue-100 outline-none"
    />
    <button
      type="submit"
      className="w-[200px] h-[45px] bg-blue-500 hover:bg-blue-600 active:scale-95 transition-transform text-white font-semibold"
    >
      Add
    </button>
  </form>

  {/* Task List */}
  <ul className="space-y-4 mt-10">
    {tasks.length > 0 ? (
      tasks.map((task) => (
        <li
          key={task.id}
          className="w-[100px] p-10 bg-green-600   hover:bg-gray-50 transition-colors border  rounded-md shadow-sm"
        >
          <span className="text-gray-800   bg-black-600 font-medium mx-3">{task.title}</span>
          <button
            onClick={() => deleteTask(task.id)}
            className="bg-red-500 hover:bg-red-600 active:scale-95 transition-transform text-white  p-9 rounded-md shadow"
          >
             Delete
          </button>
        </li>
      ))
    ) : (
      <li className="text-center text-gray-500 italic">No tasks found.</li>
    )}
  </ul>

</div>

  );
}

export default Tasks;
