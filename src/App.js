import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "Monday",
    },
    {
      id: 2,
      text: "Meeting with Mr J",
      day: "Tuesday",
    },
    {
      id: 3,
      text: "Shopping",
      day: "Friday",
    },
  ]);

  //Add a task
  const addTask = (addedTask) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...addedTask };
    setTasks([...tasks, newTask]);
  };

  //Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <Header onClick={toggleForm} showText={showForm} />
      {showForm && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggled={toggleReminder} />
      ) : (
        <p> No task</p>
      )}
    </div>
  );
}

export default App;
