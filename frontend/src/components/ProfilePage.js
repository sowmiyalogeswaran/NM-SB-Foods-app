// src/components/ProfilePage.js
import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import Settings from './Profile/Settings';
import Notifications from './Profile/Notifications';
import Payment from './Profile/Payment';
import Address from './Profile/Address';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('OrderHistory');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/signin');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'OrderHistory':
        return <OrderHistory />;
      case 'Notifications':
        return <Notifications />;
      case 'Payment':
        return <Payment />;
      case 'Address':
        return <Address />;
      case 'Settings':
        return <Settings />;
      default:
        return <OrderHistory />;
    }
  };

  return (
    <div className="profile-container">
      <aside className="sidebar">
        <h2>My Account</h2>
        <ul>
          <li onClick={() => setActiveSection('OrderHistory')}>Orders</li>
          <li onClick={() => setActiveSection('Notifications')}>Notifications</li>
          <li onClick={() => setActiveSection('Payment')}>Payments</li>
          <li onClick={() => setActiveSection('Address')}>Addresses</li>
          <li onClick={() => setActiveSection('Settings')}>Settings</li>
        </ul>
        <button onClick={handleLogout} className="logout-button">
          Log Out
        </button>
      </aside>

      <main className="profile-content">
        <div className="profile-header">
          <h2>{user?.username || 'Guest'}</h2>
          <p>{user?.email || 'No email provided'}</p>
          <button className="edit-button">Edit Profile</button>
        </div>
        {renderSection()}
      </main>
    </div>
  );
};

export default ProfilePage;
