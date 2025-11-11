import React from "react";
import "../Pages.css";
import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart, removeFromCart, checkout }) {
  const navigate = useNavigate();

  const increase = (id) =>
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );

  const decrease = (id) =>
    setCart(
      cart.map((i) =>
        i.id === id && i.quantity > 1
          ? { ...i, quantity: i.quantity - 1 }
          : i
      )
    );

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0).toFixed(2);

  const handleCheckout = () => {
    checkout({ date: new Date().toLocaleString(), total, items: cart });
    navigate("/orders");
  };

  return (
    <div className="page">
      <h2 className="section-title">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((i) => (
              <div key={i.id} className="cart-item">
                <img src={i.image} alt={i.title} />
                <div>
                  <h3>{i.title.slice(0, 30)}</h3>
                  <p>${i.price}</p>
                  <div className="qty">
                    <button onClick={() => decrease(i.id)}>-</button>
                    <span>{i.quantity}</span>
                    <button onClick={() => increase(i.id)}>+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(i.id)}>🗑</button>
              </div>
            ))}
          </div>
          <h3>Total: ${total}</h3>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
