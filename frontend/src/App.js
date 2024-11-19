import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './components/HomePage';
import Menu from './components/MenuPage';
import Orders from './components/Profile/OrderHistory';
import Cart from './components/Cart';
import ProfilePage from './components/ProfilePage';
import SignIn from './components/AuthPage'; // Assuming SignIn or AuthPage exists
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';
import { AuthProvider } from './components/AuthContext';

function App() {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/your-endpoint') // Replace with your actual backend endpoint
      .then((response) => {
        // Handle the response if needed, e.g., updating state, logging data
        console.log('Data fetched:', response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <CartProvider>
            <div className="App">
              <Navbar />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/MenuPage" element={<Menu />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/auth" element={<SignIn />} /> {/* Sign-in/Sign-up page */}

                {/* Protected Routes */}
                <Route
                  path="/OrderHistory"
                  element={
                    <ProtectedRoute>
                      <Orders />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </CartProvider>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
