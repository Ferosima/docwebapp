import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Documents from "../pages/DocumentsPage";
import Signatures from "../pages/SignaturesPage";

const sidebar_routers = [
  {
    name: "Documents",
    icon: "documents", // name must be from ./components/Icon/icons.js
    path: "/documents",
    exact: true, // path must be '/' for exact:true
    main: () => <Documents />,
  },
  {
    name: "Signatures",
    icon: "signatures",
    path: "/signatures",
    main: () => <Signatures />,
  },
];

export default function SidebarRouter() {
  return (
    <Route>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          background: "#f8f9fb",
          overflow: "hidden",
        }}
      >
        <Sidebar routers={sidebar_routers} />
        <Switch>
          {sidebar_routers.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
          ))}
        </Switch>
      </div>
    </Route>
  );
}
