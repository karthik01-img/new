import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount, setSearchQuery }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e) {
    const value = e.target.value;
    setSearchInput(value);
    setSearchQuery(value); // pass search term to parent
  }

  return (
    <nav className="navbar">
      <h1 className="brand" onClick={() => navigate("/")}>
        🛍 GlowCart
      </h1>

      <div className="nav-links">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/products")}>Products</button>
        <button onClick={() => navigate("/cart")}>Cart ({cartCount})</button>
        <button onClick={() => navigate("/orders")}>Orders</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
      </div>

      {/* 🔍 Search bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="nav-search"
        value={searchInput}
        onChange={handleSearch}
      />
    </nav>
  );
}

export default Navbar;
