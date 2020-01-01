import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import * as paths from "./utils/constants/routerConstants"

import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { UnknownRoute } from "./pages/UnknownRoute";

export const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={paths.HOME} component={Home} />
        <Route path={paths.PROJECTS} component={Projects} />
        <Route component={UnknownRoute} />
      </Switch>
    </Router>
  )
}
