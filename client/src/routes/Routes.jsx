import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import { Footer } from '../components/Footer';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import OfficeDetail from '../components/OfficeDetail/OfficeDetail';
import Office from '../pages/Office';
import { Contact } from '../pages/Contact';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/kontakt">
          <Contact />
        </Route>
        <Route exact path="/kontorer">
          <Office />
        </Route>
        <Route exact path="/detaljer">
          <OfficeDetail />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </MainLayout>
  </Router>
);

export default Routes;
