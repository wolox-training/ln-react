/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import actionsCreators from '../../../redux/Login/actions';

import styles from './styles.module.scss';
import LoginForm from './layout';

class LoginFormContainer extends Component {
  login = (user, pass) => {
    this.props.login(user, pass);
  }

  submit = values => {
    this.login(values.user, values.pass);
  }

  render() {
    const { error, isLoading } = this.props;
    return (
      <div>
        { isLoading ? (<div>Loading...</div>)
          : (
            <div className={styles.login}>
              <h1 className={styles.loginTitle}>Welcome</h1>
              <LoginForm onSubmit={this.submit} isError={error} />
            </div>
          )}
      </div>);
  }
}

const mapDispatchToProp = dispatch => ({
  login: (user, pass) => dispatch(actionsCreators.login(user, pass))
});

const mapStateToProp = state => ({
  loggedIn: state.login.loggedIn,
  token: state.login.token,
  error: state.login.error,
  isLoading: state.login.isLoading
});

export default connect(mapStateToProp, mapDispatchToProp)(LoginFormContainer);
