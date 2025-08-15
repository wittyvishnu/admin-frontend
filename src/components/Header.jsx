
import React from 'react';
import { FaBell } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
  return (
    <header className="app-header">
      <div></div>
      <div className="search-wrap">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search here..." className="search-input" />
      </div>
      <div className="header-right">
        <div className="bell-wrap">
          <FaBell className="bell-icon" />
          <span className="bell-dot"></span>
        </div>
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="User"
            className="avatar"
          />
          <span className="name">Sufy</span>
        </div>
      </div>
    </header>
  );
}
