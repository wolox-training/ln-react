import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SubmissionError } from 'redux-form';

import styles from './styles.module.scss';
import LoginForm from './layout';

class LoginFormContainer extends Component {
  submit = values => {
    if (!values.pass || values.pass.length !== 8) {
      throw new SubmissionError({
        pass: 'Password must have 8 characters.'
      });
    } else {
      console.log(values);
    }
  }

  render() {
    return (
      <div className={styles.login}>
        <h1 className={styles.loginTitle}>Welcome</h1>
        <LoginForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default connect()(LoginFormContainer);
