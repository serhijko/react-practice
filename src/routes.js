import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './app';
import { HomePage, HomeRoutes } from './pages/home';
import { ContactRoutes } from './pages/contact';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ HomePage } />

        { HomeRoutes }
        { ContactRoutes }
    </Route>
);
