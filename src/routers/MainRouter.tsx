import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "../pages";
import { UserStoriesPage } from "../pages";

export const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/user-stories" component={UserStoriesPage} />
      </Switch>
    </Router>
  );
};
