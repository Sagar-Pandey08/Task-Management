import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/login">Login</Link> |<Link to="/register">Register</Link> |
          <Link to="/tasks">Tasks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Welcome! Choose a page above.</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          <Route path="/tasks/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
