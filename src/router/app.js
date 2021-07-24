import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Documents from "../pages/DocumentsPage";
import Signatures from "../pages/SignaturesPage";
import Settings from "../pages/SettingsPage";
import User from "../pages/UserPage";
import NoMatch from "../pages/NoMatch";

const sidebar_routers = [
  {
    name: "Documents",
    icon: "documents",
    path: "/app/documents/",
    main: () => <Documents />,
  },
  {
    name: "Signatures",
    icon: "signatures",
    path: "/app/signatures/",
    main: () => <Signatures />,
  },
];

export default function AppRouter() {
  return (
    <Route>
      <Sidebar routers={sidebar_routers} />
      <Switch>
        {sidebar_routers.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
        ))}
        <Route path="/app/user/*" children={<User />} />
        <Route path="/app/settings/*" children={<Settings />} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Route>
  );
}
