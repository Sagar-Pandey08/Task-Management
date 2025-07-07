import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const token = localStorage.getItem('token');

  const fetchTasks = async () => {
    const res = await axios.get('http://localhost:5000/api/tasks', {
      headers: { Authorization: token }
    });
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const markDone = async (id) => {
    await axios.put(`http://localhost:5000/api/tasks/${id}`, { completed: true }, {
      headers: { Authorization: token }
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: token }
    });
    fetchTasks();
  };

  return (
    <div>
      <a href="/tasks/new">Add Task</a>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.priority} - {task.completed ? '✅' : '❌'}
            <button onClick={() => markDone(task._id)}>Done</button>
            <a href={`/tasks/edit/${task._id}`}>Edit</a>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
