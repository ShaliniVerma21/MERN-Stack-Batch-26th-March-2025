import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 — Page Not Found</h1>
    <p>Sorry, we couldn’t find what you were looking for.</p>
    <Link to="/">← Back to Home</Link>
  </div>
);

export default NotFound;
