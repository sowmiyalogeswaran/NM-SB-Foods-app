import React, { useState } from 'react';
import './CartPage.css';

const CartPage = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 12.99, quantity: 1 },
    { id: 2, name: 'Burger', price: 9.99, quantity: 2 },
    { id: 3, name: 'Pasta', price: 10.99, quantity: 1 },
  ]);

  // State to control the visibility of the popup
  const [isPopupVisible, setPopupVisible] = useState(false);

  // Function to handle quantity changes
  const handleQuantityChange = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  // Handle checkout
  const handleCheckout = () => {
    setPopupVisible(true); // Show the popup
    // Additional actions like clearing the cart can be added here
  };

  // Close popup
  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">${item.price.toFixed(2)}</span>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span className="item-quantity">{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
      </div>
      <button className="checkout-button" onClick={handleCheckout}>
        Proceed to Checkout
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>Order Placed!</h2>
            <p>Thank you for your purchase.</p>
            <button className="close-popup-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
