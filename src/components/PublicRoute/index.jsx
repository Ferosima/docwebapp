import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isHaveOrganization = useSelector((state) => state.organizations.currentOrganization);
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn && restricted ? (
        <Redirect
          to={{
            pathname: isHaveOrganization ? "/app/documents" : "/app/organization/",
            state: { from: props.location },
          }}
        />
      ) : (
        <Component {...props} />
      ))}
    />
  );
};
