import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...props} />;
        } else {
          toast.error("You must login first!");
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
