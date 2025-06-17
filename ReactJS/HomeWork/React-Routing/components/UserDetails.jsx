import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockUserData = {
  101: { name: 'Alice Johnson', email: 'alice@example.com', joined: '2024-01-15' },
  102: { name: 'Bob Smith',    email: 'bob@example.com',   joined: '2023-11-02' },
  103: { name: 'Charlie Lee',  email: 'charlie@example.com', joined: '2024-03-22' },
};

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = mockUserData[id];

  if (!user) {
    return <p>User with ID {id} not found.</p>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Member since:</strong> {user.joined}</p>
      <button onClick={() => navigate(-1)} style={{ marginTop: '16px' }}>
        ← Back to Users
      </button>
    </div>
  );
};

export default UserDetails;
