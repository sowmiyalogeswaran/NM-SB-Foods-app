import React from 'react';
import './OrderHistory.css';

const OrderHistory = () => {
  const orders = [
    { id: 1, item: 'Pizza', date: '2024-11-10', status: 'Delivered' },
    { id: 2, item: 'Burger', date: '2024-11-08', status: 'Pending' },
  ];

  return (
    <div className="order-history-container">
      <h2>Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p><strong>Item:</strong> {order.item}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found!</p>
      )}
    </div>
  );
};

export default OrderHistory;
