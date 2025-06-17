import React, { useState } from 'react';

const Settings = () => {
  const [email, setEmail] = useState('user@example.com');
  const [theme, setTheme] = useState('light');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Settings saved:\n• Email: ${email}\n• Theme: ${theme}`);
  };

  return (
    <div style={{ marginTop: '24px' }}>
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '12px 0' }}>
          <label>
            Notification Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ marginLeft: '8px' }}
            />
          </label>
        </div>
        <div style={{ margin: '12px 0' }}>
          <label>
            Theme:
            <select
              value={theme}
              onChange={e => setTheme(e.target.value)}
              style={{ marginLeft: '8px' }}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
        </div>
        <button type="submit" style={{ padding: '8px 16px' }}>
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
