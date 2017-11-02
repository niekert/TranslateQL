import React from 'react';
import { bool, func } from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ isAuthenticated, component: Component, ...routeProps }) {
  return (
    <Route
      {...routeProps}
      render={props =>
        !isAuthenticated ? <Redirect to="/login" /> : <Component {...props} />}
    />
  );
}

AuthRoute.propTypes = {
  isAuthenticated: bool.isRequired,
  component: func.isRequired,
};

export default AuthRoute;
