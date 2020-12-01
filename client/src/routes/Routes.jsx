import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';

import MainLayout from '../layouts/MainLayout';
import Events from '../pages/Events';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Events />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
