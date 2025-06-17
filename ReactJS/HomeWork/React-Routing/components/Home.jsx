import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to AlphaApp!</h1>
      <p>
        AlphaApp is your all‑in‑one dashboard to manage users, view analytics, and configure
        your settings. Get started by exploring the navigation links above.
      </p>
      <button onClick={() => navigate('/users')} style={{ padding: '8px 16px', margin: '8px' }}>
        View Users
      </button>
      <button onClick={() => navigate('/dashboard')} style={{ padding: '8px 16px', margin: '8px' }}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default Home;
