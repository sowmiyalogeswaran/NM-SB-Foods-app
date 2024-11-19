import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'

const AuthPage = () => {
  const { setIsAuthenticated } = useContext(AuthContext); // Ensure useContext is properly accessing the context
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mock login logic
    if (username === 'user' && password === 'password') {
      setIsAuthenticated(true); // Update authentication state
      navigate('/profile'); // Redirect after login
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AuthPage;
