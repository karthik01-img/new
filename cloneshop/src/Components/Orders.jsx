import React from "react";
import "../Pages.css";

function Orders({ orders }) {
  return (
    <div className="page">
      <h2 className="section-title">📦 Your Orders</h2>
      {orders.length === 0 ? (
        <p className="empty">No orders yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="order-card">
            <h3>Order #{index + 1}</h3>
            <p>Date: {order.date}</p>
            <p>Items: {order.items.length}</p>
            <p>Total: ${order.total}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
