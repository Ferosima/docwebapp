import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoute } from "../components/PublicRoute";
import { LazzyLoader } from "../components/Plugs";

const Landing = React.lazy(() => import("../pages/LandingPage"));
const Auth = React.lazy(() => import("../pages/AuthPage"));
const NoMatch = React.lazy(() => import("../pages/NoMatch"));
const App = React.lazy(() => import("./app"));

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
    <Suspense fallback={<LazzyLoader />}>
      <Switch>
        {app_routers.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
        ))}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Suspense>
  );
}
