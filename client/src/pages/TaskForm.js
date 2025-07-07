import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function TaskForm() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (id) {
      axios.get('http://localhost:5000/api/tasks', { headers: { Authorization: token } })
        .then(res => {
          const task = res.data.find(t => t._id === id);
          if (task) {
            setTitle(task.title);
            setPriority(task.priority);
            setDueDate(task.dueDate ? task.dueDate.slice(0,10) : '');
          }
        });
    }
  }, [id, token]);

  const handleSubmit = async e => {
    e.preventDefault();
    const data = { title, priority, dueDate };
    if (id) {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, data, {
        headers: { Authorization: token }
      });
    } else {
      await axios.post('http://localhost:5000/api/tasks', data, {
        headers: { Authorization: token }
      });
    }
    window.location.href = '/tasks';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
      <select value={priority} onChange={e => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <button type="submit">{id ? 'Update' : 'Create'} Task</button>
    </form>
  );
}

export default TaskForm;
