import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PageRouter from './components/PageRouter/index';

import '../scss/application.scss';

const App = ({ history }) => (
  <PageRouter history={history} />
);

App.propTypes = {
  history: PropTypes.object //splice para estructura de objeto
};

const mapStateToProp = state => ({
  loggedIn: state.login.loggedIn,
  token: state.login.token,
  error: state.login.error
});

export default connect(mapStateToProp)(App);
