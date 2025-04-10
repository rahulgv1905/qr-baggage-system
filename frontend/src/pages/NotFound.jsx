import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="text-center mt-32">
    <h1 className="text-4xl font-bold">404</h1>
    <p className="mt-4">Page not found</p>
    <Link to="/" className="mt-4 inline-block text-blue-600">Go back Home</Link>
  </div>
);

export default NotFound;
