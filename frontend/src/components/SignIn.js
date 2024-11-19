import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import './AuthPage.css';

const AuthPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = () => {
    login(); // Mark user as authenticated
    navigate('/profile'); // Redirect to profile after login
  };

  return (
    <div className="auth-container">
      <h1>Welcome!</h1>
      <p>Please sign in or sign up to access your profile.</p>
      <button onClick={handleSignIn} className="auth-button">Sign In / Sign Up</button>
    </div>
  );
};

export default AuthPage;
