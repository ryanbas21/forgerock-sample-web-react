/*
 * forgerock-sample-web-react
 *
 * router.js
 *
 * Copyright (c) 2021 ForgeRock. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ProtectedRoute } from './utilities/route.js';
import Todos from './views/todos.js';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Home from './views/home.js';
import Login from './views/login.js';
import Logout from './views/logout.js';
import Register from './views/register.js';

/**
 * @function App - Application React view
 * @returns {Object} - React JSX view
 */
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <ProtectedRoute path="/todos">
          <Header />
          <Todos />
          <Footer />
        </ProtectedRoute>
        <Route path="/logout">
          <Header />
          <Logout />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}
