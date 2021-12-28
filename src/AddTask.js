import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (!name || !date) {
      alert('Enter date and name');
      return;
    }

    addTask({ name, date });
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const dayChangeHandler = (event) => {
    setDate(event.target.value);
  };

  return (
    <form onSubmit={addTaskHandler} className='add-form'>
      <div className='form-control'>
        <label>Task</label>
        <input type='text' onChange={nameChangeHandler} value={name} />
      </div>
      <div className='form-control'>
        <label>Date</label>
        <input type='text' onChange={dayChangeHandler} value={date} />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  );
};

export default AddTask;
