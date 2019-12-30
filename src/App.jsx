import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import * as paths from "./utils/constants/routerConstants"

import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { UnknownRoute } from "./pages/UnknownRoute";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={paths.HOME} component={Home} />
        <Route path={paths.PROJECTS} component={Projects} />
        <Route path={paths.RESUME} component={Resume} />
        <Route component={UnknownRoute} />
      </Switch>
    </Router>
  )
}
