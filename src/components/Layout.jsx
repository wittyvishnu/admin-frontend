
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
