import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router';
import PropTypes from 'prop-types';

import Game from '../../screens/Game';
import GameHistory from '../../screens/GameHistory';
import LoginFormContainer from '../../screens/Login';
import LocalStorageService from '../../../services/LocalStorageService';

import AuthenticatedRoute from './AuthenticatedRoute/index';

class PageRouter extends Component {
  componentDidMount() {
    const token = LocalStorageService.getToken('token');
    const userName = LocalStorageService.getToken('userName');
    this.props.inicializateApp(token, userName);
  }

  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <AuthenticatedRoute auth={false} exact path="/" component={LoginFormContainer} {...this.props} />
          <AuthenticatedRoute auth path="/game" component={Game} {...this.props} />
          <AuthenticatedRoute auth path="/gameHistory" component={GameHistory} {...this.props} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

PageRouter.propTypes = {
  inicializateApp: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
  inicializateApp: (token, userName) => dispatch({ type: '@@login/INIT', payload: { token, userName } })
});

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  token: state.login.token,
  userName: state.login.userName
});

export default connect(mapStateToProps, mapDispatchToProps)(PageRouter);
