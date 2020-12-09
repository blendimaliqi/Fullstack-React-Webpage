import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from '../components/NoMatch';
import { Footer } from '../components/Footer';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import OfficeDetail from '../components/OfficeDetail/OfficeDetail';
import Office from '../pages/Office';
import { Contact } from '../pages/Contact';
import FagartiklerPage from '../pages/FagartiklerPage';
import NewArticle from '../pages/NewArticle';
import ArticleDetails from '../components/Article Details/ArticleDetails';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup';
import Inbox from '../components/Inbox/Inbox.jsx';
import Statistic from '../components/Statistics/Statistic';
import UpdateFagArtikkelPage from '../pages/UpdateFagArtikkelPage';

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
        <Route exact path="/kontorer/:id">
          <OfficeDetail />
        </Route>
        <Route exact path="/fagartikler">
          <FagartiklerPage />
        </Route>
        <Route exact path="/fagartikler/:id">
          <ArticleDetails />
        </Route>
        <Route exact path="/nyartikkel">
          <NewArticle />
        </Route>
        <Route exact path="/fagartikler/:id/:id">
          <UpdateFagArtikkelPage />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/registrer">
          <Signup />
        </Route>
        <Route exact path="/useremails">
          <Inbox />
        </Route>
        <Route exact path="/stats">
          <Statistic />
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
