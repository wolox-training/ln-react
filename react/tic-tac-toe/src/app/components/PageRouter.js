import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router';

import Game from '../screens/Game';
import LoginFormContainer from '../screens/Login';

class PageRouter extends Component {
  render() {
    const { history, loggedIn } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={LoginFormContainer} />
          <Route path="/game" render={props => (
            loggedIn ?
              <Game />
            : <Redirect to="/" />
            )
          }
          />
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapStateToProp = state => ({
  loggedIn: state.login.loggedIn
});

export default connect(mapStateToProp)(PageRouter);
