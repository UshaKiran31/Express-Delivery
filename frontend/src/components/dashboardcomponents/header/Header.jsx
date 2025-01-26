import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="layout-header">
      <div className="brand">
        <h1>ExpressDelivery</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="actions">
        <span className="icon">🔔</span>
        <span className="icon">💬</span>
        <span className="icon user-icon">👤</span>
        
      </div>
    </header>
  );
}

