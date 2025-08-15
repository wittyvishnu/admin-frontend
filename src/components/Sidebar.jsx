
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUsers, FiBox, FiSettings, FiHelpCircle, FiUser } from 'react-icons/fi';
import hanger from '../assets/Screenshot 2025-08-14 222650.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={hanger} alt="StarFashion logo" />
        <span>StarFashion</span>
      </div>
      <ul className="nav-list">
        <li>
          <NavLink to="/" end>
            <FiHome className="icon" /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers">
            <FiUsers className="icon" /> Customers
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
            <FiBox className="icon" /> Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/vendors">
            <FiUser className="icon" /> Vendors
          </NavLink>
        </li>
      </ul>

      <div className="nav-section-label">OTHERS</div>
      <ul className="nav-list">
        <li>
          <NavLink to="/settings">
            <FiSettings className="icon" /> Settings
          </NavLink>
        </li>
        <li>
          <NavLink to="/account">
            <FiUser className="icon" /> Account
          </NavLink>
        </li>
        <li>
          <NavLink to="/help">
            <FiHelpCircle className="icon" /> Help
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
