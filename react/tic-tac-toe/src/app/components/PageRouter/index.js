/* eslint-disable react/jsx-no-bind */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router';
import PropTypes from 'prop-types';

import Topbar from '../Topbar';
import Game from '../../screens/Game';
import GameHistory from '../../screens/GameHistory';
import LoginFormContainer from '../../screens/Login';
import LocalStorageService from '../../../services/LocalStorageService';

class PageRouter extends Component {
  componentDidMount() {
    const token = LocalStorageService.getToken('token');
    this.props.inicializateApp(token);
  }

  render() {
    const { history, isLoading, token } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Fragment>
          <Topbar />
          <Switch>
            <Route
              exact path="/"
              render={() => (token ? <Redirect to="/game" /> : <LoginFormContainer />)}
            />
            <Route
              path="/game"
              render={() => (token ? <Game /> : <Redirect to="/" />)}
            />
            <Route
              path="/gameHistory"
              render={() => (token ? <GameHistory /> : <Redirect to="/" />)}
            />
          </Switch>
        </Fragment>
      </ConnectedRouter>
    );
  }
}

PageRouter.propTypes = {
  inicializateApp: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string
};

const mapDispatchToProp = dispatch => ({
  inicializateApp: (token) => dispatch({ type: 'INIT', token })
});

const mapStateToProp = state => ({
  isLoading: state.login.isLoading,
  token: state.login.token
});

export default connect(mapStateToProp, mapDispatchToProp)(PageRouter);
