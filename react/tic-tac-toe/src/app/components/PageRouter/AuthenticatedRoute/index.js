/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Route, Redirect } from 'react-router';
import PropTypes from 'prop-types';

import Topbar from '../../Topbar';

function AuthenticatedRoute({ auth, isLoading, token, path, component }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (auth) {
    return (
      <div>
        { token ? <Topbar /> : <div /> }
        { token ? (
          <Route
            path={path}
            component={component}
          />
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
  return (
    <div>
      { token ? (
        <Redirect to="/game" />
      ) : (
        <Route
          path={path} exact
          component={component}
        />
      )}
    </div>
  );
}

AuthenticatedRoute.propTypes = {
  auth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  token: PropTypes.string
};

export default AuthenticatedRoute;
