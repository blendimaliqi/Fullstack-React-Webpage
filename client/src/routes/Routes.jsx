import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import { Footer } from '../components/Footer';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer/>
    </MainLayout>
  </Router>
);

export default Routes;
