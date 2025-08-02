import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom'; 

function Layout() {
  return (
    <div className="layout">
      <Header />
      <div className="main-content">
        <Sidebar />
        <main>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
}

export default Layout;
