import { useState } from 'react';
import './App.css';
import Task from './Task';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Go to Groceries', date: 'Jan 1, 2020' },
    { id: 2, name: 'Complete Courses', date: 'Feb 1, 2020' },
  ]);

  //delete task
  const deleteTaskHandler = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //add task
  const addTaskHandler = (task) => {
    // setTasks((prevTasks) => {
    //   return [
    //     ...prevTasks,
    //     {
    //       id:
    //         prevTasks
    //           .map((task) => task.id)
    //           .reduce((prev, curr) => (prev > curr ? prev : curr), 0) + 1,
    //       name: 'Go to Hiking',
    //       date: 'Mar 1, 2020',
    //     },
    //   ];
    // });
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id: id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className='container'>
      <AddTask addTask={addTaskHandler} />
      {tasks.length > 0
        ? tasks.map((task) => (
            <Task task={task} deleteTask={deleteTaskHandler} key={task.id} />
          ))
        : 'No Tasks to display'}
    </div>
  );
}

export default App;
