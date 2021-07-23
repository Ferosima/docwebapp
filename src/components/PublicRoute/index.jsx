import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props) => (isLoggedIn && restricted ? (
        <Redirect to={{ pathname: "/app/documents/", state: { from: props.location } }} />
      ) : (
        <Component {...props} />
      ))}
    />
  );
};
