import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.css';

function SidebarLink({ label, to, activeOnlyWhenExact }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div className="sidebarLink">
      <div className={match ? 'dot' : 'dot empty'} />
      <Link className="text-link" to={to}>
        {label}
      </Link>
    </div>
  );
}

export default SidebarLink;
