import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <div className='task'>
      <h2>{task.name}</h2>
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
