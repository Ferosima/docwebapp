import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import Auth from "../pages/AuthPage";

const auth_routers = [
  {
    path: "/auth",
    exact: true,
    main: () => <LoginForm />,
  },
  {
    path: "/#",
    main: () => <RegistrationForm />,
  },
];

export default function AuthRouter() {
  return (
    <Switch>
      <Route exact path={path}>
        <Auth routers={auth_routers} />
      </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </Switch>
  );
}
