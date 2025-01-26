import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
