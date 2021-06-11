import React from 'react';
import SidebarLink from '../SidebarLink';
import './style.css';

function Sidebar({ routers }) {
  return (
    <div className="sidebar">
      <h3 className="logoTitle">docwebapp</h3>
      {routers.map((route) => (
        <SidebarLink activeOnlyWhenExact={route.exact} to={route.path} label={route.name} />
      ))}
    </div>
  );
}

export default Sidebar;
