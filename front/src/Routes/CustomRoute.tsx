import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "../redux/Store/Store";
import { TRoute } from "../type.ds";

export default function CustomRoute({
  path,
  exact,
  isLogin,
  Component,
}: TRoute) {
  const userSignin = useSelector((state: RootState) => state.userSignin);
  const { userInfo } = userSignin;
  return isLogin ? (
    userInfo ? (
      <Route
        path={path}
        exact={exact}
        render={(props) => <Component {...props} />}
      />
    ) : (
      <Redirect to="/signin" />
    )
  ) : (
    <Route
      path={path}
      exact={exact}
      render={(props) => <Component {...props} />}
    />
  );
}
