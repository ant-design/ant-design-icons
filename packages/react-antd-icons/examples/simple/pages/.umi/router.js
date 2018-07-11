import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "exact": true,
    "component": require('../index.jsx').default
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
