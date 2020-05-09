import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./AsyncComponent";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

const AsyncLogin = asyncComponent(() => import("../components/Login"));
const AsyncNoTask = asyncComponent(() => import("../components/NoTask"));
const AsyncNewTask = asyncComponent(() => import("../components/NewTask"));
const AsyncDashboard = asyncComponent(() => import("../components/Dashboard"));
const AsyncNotFound = asyncComponent(() => import("../components/NotFound"));

export default ({ childProps }) =>
  <Switch>
    <UnauthenticatedRoute path="/" exact component={AsyncLogin} props={childProps} />
    <UnauthenticatedRoute path="/notask" exact component={AsyncNoTask} props={childProps} />
    <UnauthenticatedRoute path="/newtask" exact component={AsyncNewTask} props={childProps} />
    <UnauthenticatedRoute path="/dashboard" exact component={AsyncDashboard} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>;
