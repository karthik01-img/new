import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";
import Profile from "./Components/Profile";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (item) => {
    if (!cart.find((i) => i.id === item.id)) {
      setCart([...cart, { ...item, quantity: 1 }]);
      toast.success(`${item.title.slice(0, 25)} added to cart`);
    } else {
      toast.info("Item already in cart");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
    toast.error("Item removed from cart");
  };

  const checkout = (order) => {
    setOrders([...orders, order]);
    setCart([]);
    toast.success("Order placed successfully!");
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} setSearchQuery={setSearchQuery} />
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} searchQuery={searchQuery} />} />
        <Route
          path="/products"
          element={<Products addToCart={addToCart} searchQuery={searchQuery} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              checkout={checkout}
            />
          }
        />
        <Route path="/orders" element={<Orders orders={orders} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
