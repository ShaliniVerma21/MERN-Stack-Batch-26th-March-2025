import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link> |{" "}
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested route example */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
