import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./sidebar";
import Auth from "../pages/AuthPage";

const app_routers = [
  {
    path: "/auth",
    exact: false,
    main: () => <Auth />,
  },
  {
    path: "/app",
    exact: false,
    main: () => <Sidebar />,
  },
];

export default function AppRouter() {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#f8f9fb",
          overflow: "hidden",
        }}
      >
        <Switch>
          {app_routers.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
