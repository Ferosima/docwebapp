import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./app";
import { PrivateRoute } from "../components/PrivateRoute";
import Auth from "../pages/AuthPage";
import NoMatch from "../pages/NoMatch";

const app_routers = [
  {
    path: "/auth/*",
    exact: true,
    main: () => <Auth />,
  },
  {
    path: "/app",
    // exact: true,
    main: () => <PrivateRoute exact path="" component={Sidebar} />,
  },
];

export default function AppRouter() {
  return (
    // <Router>
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
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
    // </Router>
  );
}
