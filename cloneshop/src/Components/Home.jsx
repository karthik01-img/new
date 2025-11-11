import React, { useEffect, useState } from "react";
import "../Pages.css";

function Home({ addToCart, searchQuery }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="page">
      <h2 className="section-title">✨ Discover New Arrivals</h2>
      <div className="grid">
        {filteredData.map((item) => (
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

export default Home;
