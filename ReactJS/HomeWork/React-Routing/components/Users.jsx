import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
  const users = [
    { id: 101, name: 'Alice Johnson', role: 'Administrator' },
    { id: 102, name: 'Bob Smith', role: 'Editor' },
    { id: 103, name: 'Charlie Lee', role: 'Viewer' },
  ];

  return (
    <div>
      <h1>Users</h1>
      <p>Select a user to view detailed information.</p>
      <ul>
        {users.map(user => (
          <li key={user.id} style={{ margin: '8px 0' }}>
            <Link to={`/user/${user.id}`}>
              {user.name} — <em>{user.role}</em>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
