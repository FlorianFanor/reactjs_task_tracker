import { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggled }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggled={onToggled}
        />
      ))}
    </>
  );
};

export default Tasks;
