import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Documents from "../pages/DocumentsPage";
import Settings from "../pages/SettingsPage";
import User from "../pages/UserPage";
import People from "../pages/PeoplePage";
import Notifications from "../pages/NotificationsPage";
import NoMatch from "../pages/NoMatch";
import Organization from "../pages/OrganizationPage";
import { getCurrentOrganizationState } from "../store/selectors/organizations";

const routers = [
  {
    name: "documents",
    icon: "documents",
    path: "/app/documents/",
    main: () => <Documents />,
  },
  {
    name: "members",
    icon: "people",
    path: "/app/people/",
    main: () => <People />,
  },
];

const default_routers = [
  {
    name: "notifications",
    icon: "notifications",
    path: "/app/notifications/",
    main: () => <Notifications />,
  },
  {
    name: "settings",
    icon: "settings",
    path: "/app/settings/",
    main: () => <Settings />,
  },
];

export default function AppRouter() {
  const currentOrganization = useSelector(getCurrentOrganizationState);
  return (
    <Route>
      <Sidebar routers={routers} default_routers={default_routers} />
      <Switch>
        {currentOrganization
          && routers.map((route, index) => (
            <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
          ))}
        {default_routers.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
        ))}
        <Route path="/app/organization/*" children={<Organization />} />
        <Route path="/app/user/*" children={<User />} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Route>
  );
}
