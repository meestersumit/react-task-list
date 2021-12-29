import React from 'react';

const Task = ({ task, deleteTask, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>{task.name}</h3>
      <p>{task.date}</p>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Task;
