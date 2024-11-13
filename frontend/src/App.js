import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/HomePage';
import Menu from './components/MenuPage';
import Orders from './components/OrderHistory';
import Cart from './components/Cart';
import ProfilePage from './components/ProfilePage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { UserProvider, useUser } from './contexts/UserContext';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/your-endpoint') // Replace with your actual backend endpoint
      .then((response) => {
        // Handle the response if needed, e.g., updating state, logging data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <UserProvider>
      <Router>
        <CartProvider>
          <div className="App">
            <Navbar />
            <Routes>
              {/* Conditionally render SignIn page only if the user is not authenticated */}
              <Route path="/signin" element={<PublicRoute><SignIn /></PublicRoute>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/MenuPage" element={<Menu />} />
              <Route path="/OrderHistory" element={<Orders />} />
              <Route path="/Cart" element={<Cart />} />

              {/* Protect profile route for authenticated users */}
              <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            </Routes>
          </div>
        </CartProvider>
      </Router>
    </UserProvider>
  );
}

// PrivateRoute component to protect routes for authenticated users
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useUser();

  // If the user is not authenticated, redirect to SignIn page
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return children; // If authenticated, render the requested component
};

// PublicRoute component to prevent access to SignIn if already authenticated
const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useUser();

  // If the user is authenticated, redirect to Profile page
  if (isAuthenticated) {
    return <Navigate to="/profile" />;
  }

  return children; // If not authenticated, render the SignIn page
};

export default App;
