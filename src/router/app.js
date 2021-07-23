import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Documents from "../pages/DocumentsPage";
import Signatures from "../pages/SignaturesPage";

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
      </Switch>
    </Route>
  );
}
