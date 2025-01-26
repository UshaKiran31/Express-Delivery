
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import classNames from 'classnames';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      {/* <div className="sidebar-header">
        <span className="sidebar-title">ExpressDelivery</span>
      </div> */}
      <div className="sidebar-links">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? 'active-link' : 'inactive-link',
        'sidebar-link'
      )}
    >
      
      <span className="link-icon">{item.icon}</span>
      <span className="link-key">{item.key}</span>
    </Link>
  );
}
