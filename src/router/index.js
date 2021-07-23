import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoute } from "../components/PublicRoute";
import Auth from "../pages/AuthPage";
import Landing from "../pages/LandingPage";
import NoMatch from "../pages/NoMatch";
import App from "./app";

const app_routers = [
  {
    path: "/",
    exact: true,
    main: () => <PublicRoute restricted component={Landing} exact />,
  },
  {
    path: "/auth/*",
    exact: true,
    main: () => <PublicRoute restricted component={Auth} exact />,
  },
  {
    path: "/app/*",
    exact: true,
    main: () => <PrivateRoute component={App} exact />,
  },
];

export default function AppRouter() {
  return (
    <Switch>
      {app_routers.map((route, index) => (
        <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
      ))}
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}
