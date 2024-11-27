import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
    // State for tasks
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: "", description: "" });

    // Fetch tasks when the component loads
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/tasks/")
            .then((response) => {
                setTasks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tasks!", error);
            });
    }, []);

    // Add a new task
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/tasks/", {
            ...newTask,
            completed: false,
        }).then((response) => {
            setTasks([...tasks, response.data]); // Add the new task to the list
            setNewTask({ title: "", description: "" }); // Clear the textbox
        }).catch((error) => {
            console.error("Error adding task!", error);
        });
    };

    // Mark a task as completed
    const toggleCompletion = (taskId) => {
        const task = tasks.find((t) => t.id === taskId);
        axios.put(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
            ...task,
            completed: !task.completed,
        }).then((response) => {
            setTasks(tasks.map((t) => (t.id === taskId ? response.data : t)));
        }).catch((error) => {
            console.error("Error updating task!", error);
        });
    };

    // Delete a task
    const handleDelete = (taskId) => {
        axios.delete(`http://127.0.0.1:8000/api/tasks/${taskId}/`)
            .then(() => {
                setTasks(tasks.filter((t) => t.id !== taskId));
            })
            .catch((error) => {
                console.error("Error deleting task!", error);
            });
    };

    return ( // Used Tailwind CSS for formatting
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">To-Do List</h1>
          
          <form onSubmit={handleSubmit} className="mb-4 flex space-x-2">
              <input
                  type="text"
                  placeholder="Task Title"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="border border-gray-300 rounded p-2 w-64"
              />
              <input
                  type="text"
                  placeholder="Task Description"
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  className="border border-gray-300 rounded p-2 w-64"
              />
              <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                  Add Task
              </button>
          </form>
  
          <ul className="w-full max-w-2xl space-y-2">
              {tasks.map((task) => (
                  <li
                      key={task.id}
                      className="bg-white shadow p-4 rounded flex justify-between items-center"
                  >
                      <div>
                          <strong className="text-lg">{task.title}</strong>
                          <p className="text-gray-600">{task.description}</p>
                          <span
                              className={`inline-block mt-1 px-2 py-1 text-xs rounded ${
                                  task.completed
                                      ? "bg-green-100 text-green-600"
                                      : "bg-red-100 text-red-600"
                              }`}
                          >
                              {task.completed ? "Completed" : "Pending"}
                          </span>
                      </div>
                      <div className="flex space-x-2">
                          <button
                              onClick={() => toggleCompletion(task.id)}
                              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                          >
                              {task.completed ? "Mark as Pending" : "Mark as Completed"}
                          </button>
                          <button
                              onClick={() => handleDelete(task.id)}
                              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                              Delete
                          </button>
                      </div>
                  </li>
              ))}
          </ul>
      </div>
    );
  
}

export default App;
