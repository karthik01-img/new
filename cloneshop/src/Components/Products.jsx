import React, { useEffect, useState } from "react";
import "../Pages.css";

function Products({ addToCart }) {
  const [data, setData] = useState([]);
  const [selectedCat, setSelectedCat] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const categories = ["all", ...new Set(data.map((item) => item.category))];

  const filtered =
    selectedCat === "all"
      ? data
      : data.filter((item) => item.category === selectedCat);

  return (
    <div className="page">
      <h2 className="section-title">🛍 Explore by Category</h2>
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={selectedCat === cat ? "active" : ""}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title.slice(0, 35)}</h3>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
