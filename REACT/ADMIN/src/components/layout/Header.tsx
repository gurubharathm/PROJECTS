import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="admin-header">
    <div className="admin-header-content">
      <div className="admin-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="admin-search-bar">
        <input type="search" placeholder="Search..." />
        <button type="submit">Search</button>
      </div>
    </div>
  </header>
  );
};

export default Header;