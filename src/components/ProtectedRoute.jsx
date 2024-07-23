import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((store) => store.login.isLogged);
  console.log("isAuth", isAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth === true) {
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
