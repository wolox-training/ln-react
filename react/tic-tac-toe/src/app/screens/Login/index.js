/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/Login/actions';

import styles from './styles.module.scss';
import LoginForm from './layout';

class LoginFormContainer extends Component {
  submit = values => {
    this.props.login(values.user, values.pass);
  }

  render() {
    const { error, isLoading } = this.props;
    return (
      <div>
        { isLoading ? (<div>Loading...</div>)
          : (
            <div className={styles.login}>
              <h1 className={styles.loginTitle}>Login</h1>
              <LoginForm onSubmit={this.submit} isError={error} />
            </div>
          )}
      </div>);
  }
}

LoginFormContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  error: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  login: (user, pass) => dispatch(actionsCreators.login(user, pass))
});

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  error: state.login.error,
  isLoading: state.login.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
