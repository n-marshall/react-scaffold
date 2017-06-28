import React from 'react';
import Router from 'react-router';

import App from './components/App'
import Home from './components/Home';

/* create a group of routes with nesting */
const routes = (
    <Router.Route handler={App}>
        <Router.DefaultRoute name="home" handler={Home} />
    </Router.Route>
);

export default routes;