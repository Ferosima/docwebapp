import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import storage from "redux-persist/lib/storage";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
  const accessToken = storage.getItem("accessToken");
  return (
    <Route
      {...rest}
      render={(props) => (accessToken ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/auth/login", state: { from: props.location } }} />
      ))}
    />
  );
};
