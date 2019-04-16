/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionsCreators from '../../../redux/Login/actions';

import styles from './styles.module.scss';
import LoginForm from './layout';

class LoginFormContainer extends Component {
  getLogin = (user, pass) => {
    this.props.getLogin(user, pass);
  }

  submit = values => {
    this.getLogin(values.user, values.pass);
  }

  render() {
    const { error } = this.props;
    return (
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Welcome</h1>
        <LoginForm onSubmit={this.submit} isError={error} />
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => ({
  getLogin: (user, pass) => dispatch(actionsCreators.getLogin(user, pass))
});

const mapStateToProp = state => ({
  loggedIn: state.login.loggedIn,
  token: state.login.token,
  error: state.login.error
});

export default connect(mapStateToProp, mapDispatchToProp)(LoginFormContainer);
