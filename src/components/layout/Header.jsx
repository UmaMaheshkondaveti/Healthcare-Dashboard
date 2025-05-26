import React from 'react';
import { Bell, Plus, Search } from 'lucide-react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo-container">
        <h1 className="header-logo-text">
          Health<span className="header-logo-accent">care.</span>
        </h1>
      </div>

      <div className="header-search-container">
        <Search className="header-search-icon" />
        <input
          type="search"
          placeholder="Search"
          className="header-search-input"
        />
      </div>

      <div className="header-actions-container">
        <button aria-label="Notifications" className="header-action-button header-notification-button">
          <Bell className="header-action-icon" />
        </button>
        
        <div className="header-user-profile">
          <div className="header-user-avatar">
            <img src="/assets/doc.jpg" alt="User Avatar" className="header-user-avatar-image" />
          </div>
          <span className="header-user-name">Dr. Uma Mahesh</span>
        </div>

        <button aria-label="Add" className="header-action-button header-add-button">
          <Plus className="header-action-icon" />
        </button>
      </div>
    </header>
  );
};

export default Header;
