
import React from "react";

export default function TopProducts() {
  const products = [
    { id: "01", name: "Home Decor Range", popularity: 45, color: "#4a90e2" },
    { id: "02", name: "Disney Princess Pink Bag 18’", popularity: 29, color: "#2ecc71" },
    { id: "03", name: "Bathroom Essentials", popularity: 18, color: "#9b59b6" },
    { id: "04", name: "Apple Smartwatches", popularity: 25, color: "#e67e22" },
  ];

  return (
    <div className="card top-products-card">
      <h3 className="top-products-title">Top Products</h3>
      <table className="top-products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>
                <div className="popularity-bar">
                  <div
                    className="popularity-fill"
                    style={{
                      width: `${p.popularity}%`,
                      backgroundColor: p.color,
                    }}
                  ></div>
                </div>
              </td>
              <td>
                <span
                  className="sales-badge"
                  style={{
                    color: p.color,
                    borderColor: p.color,
                    backgroundColor: '#fff', // reference uses white background with border
                  }}
                >
                  {p.popularity}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
