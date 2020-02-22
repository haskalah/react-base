import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navigation from './CustomComponents/Navigation';
import LandingPage from './Pages/LandingPage';
import SignUpPage from './Pages/SignUpPage';
import SignInPage from './Pages/SignInPage';
import PasswordForgetPage from './Pages/PasswordForgetPage';
import HomePage from './Pages/HomePage';
import AccountPage from './Pages/AccountPage';
import AdminPage from './Pages/AdminPage';

import * as ROUTES from '../constants/routes';
import {withAuthentication} from './Features/Session';

import {Container} from 'semantic-ui-react';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Container>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Container>
    </div>
  </Router>
);

export default withAuthentication(App);
