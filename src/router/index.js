import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Documents from '../pages/DocumentsPage';

const sidebar_routers = [
  {
    name: 'Documents',
    path: '/',
    exact: true, // path must be '/' for exact:true
    main: () => <Documents />,
  },
  {
    name: 'Signatures',
    path: '/signatures',
    main: () => <h2>Signatures</h2>,
  },
];

export default function SidebarExample() {
  return (
    <Router>
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          background: '#f8f9fb',
          overflow: 'hidden',
        }}
      >
        <Sidebar routers={sidebar_routers} />

        {/* Router */}
        <Switch>
          {sidebar_routers.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
