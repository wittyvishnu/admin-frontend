import React from 'react';
import SalesSummary from '../components/dashboard/SalesSummary';
import TopProducts from '../components/dashboard/TopProducts';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard Content</h2>
      <SalesSummary />
      <TopProducts />
    </div>
  );
}

export default Dashboard;