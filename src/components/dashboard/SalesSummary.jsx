
import React from 'react';
import { FiDollarSign, FiShoppingCart, FiPackage, FiUserPlus, FiDownload } from 'react-icons/fi';

export default function SalesSummary() {
  const stats = [
    { icon: <FiDollarSign />, title: 'Total Sales', value: '$1k', change: '+8% from yesterday', bg: '#fde7ef' },
    { icon: <FiShoppingCart />, title: 'Total Order', value: '300', change: '+5% from yesterday', bg: '#fff1e6' },
    { icon: <FiPackage />, title: 'Product Sold', value: '5', change: '+1.2% from yesterday', bg: '#e7f9f0' },
    { icon: <FiUserPlus />, title: 'New Customers', value: '8', change: '0.5% from yesterday', bg: '#f3f0ff' },
  ];

  return (
    <div>
      {}
      <div className="card-head" style={{ marginBottom: '18px' }}>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: '16px', color: '#1e1e2d' }}>Today’s Sales</h3>
          <p style={{ fontSize: '13px', color: '#6b7280' }}>Sales Summary</p>
        </div>
        <button className="btn btn-outline">
          <FiDownload style={{ marginRight: '6px' }} />
          Export
        </button>
      </div>

      {/* Stats Grid */}
      <div className="sales-summary">
        {stats.map((item, index) => (
          <div key={index} className="stat-card" style={{ background: item.bg }}>
            <div className="stat-icon">{item.icon}</div>
            <h4 className="stat-title">{item.title}</h4>
            <p className="stat-value">{item.value}</p>
            <span className="stat-delta">{item.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
