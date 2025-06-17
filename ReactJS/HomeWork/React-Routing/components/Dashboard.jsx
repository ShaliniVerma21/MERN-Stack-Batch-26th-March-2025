import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => {
  // In a real app these would come from an API
  const stats = {
    totalUsers: 342,
    activeSessions: 27,
    pageViewsToday: 1_254,
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
        <div>
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
        <div>
          <h3>Active Sessions</h3>
          <p>{stats.activeSessions}</p>
        </div>
        <div>
          <h3>Page Views Today</h3>
          <p>{stats.pageViewsToday}</p>
        </div>
      </div>

      <Link to="settings">Go to Settings →</Link>

      {/* Nested route renders here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
