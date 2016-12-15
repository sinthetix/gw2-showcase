import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import AuthorizationContainer from './containers/AuthorizationContainer';
import ShowcaseContainer from './containers/ShowcaseContainer';
// import NotFound from './components/NotFound';

export default (
  <Route path='/' component={ Main }>
    <IndexRoute component={ AuthorizationContainer } />
    <Route path=':accountKey' component={ ShowcaseContainer } />
  </Route>
);
