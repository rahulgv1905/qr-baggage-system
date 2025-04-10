import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login logic
    navigate('/dashboard');
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Login
      </button>
    </div>
  );
};

export default AdminLogin;
