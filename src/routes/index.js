import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./AsyncComponent";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

const AsyncFlights = asyncComponent(() => import("../components/Flights"));
const AsyncHome = asyncComponent(() => import("../components/Home"));
const AsyncLocation = asyncComponent(() => import("../components/Location"));
const AsyncSpecialNeeds = asyncComponent(() => import("../components/SpecialNeeds"));
const AsyncCart = asyncComponent(() => import("../components/Cart"));
const AsyncMyAccount = asyncComponent(() => import("../components/MyAccount"));
const AsyncNotFound = asyncComponent(() => import("../components/NotFound"));


export default ({ childProps }) =>
  <Switch>
    <UnauthenticatedRoute path="/" exact component={AsyncHome} props={childProps} />
    <UnauthenticatedRoute path="/flights" exact component={AsyncFlights} props={childProps} />
    <UnauthenticatedRoute path="/location" exact component={AsyncLocation} props={childProps} />
    <UnauthenticatedRoute path="/special-needs" exact component={AsyncSpecialNeeds} props={childProps} />
    <UnauthenticatedRoute path="/cart" exact component={AsyncCart} props={childProps} />
    <UnauthenticatedRoute path="/my-account" exact component={AsyncMyAccount} props={childProps} />
    <Route component={AsyncNotFound} />
  </Switch>;
