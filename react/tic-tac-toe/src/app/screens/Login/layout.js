/* eslint-disable react/button-has-type */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.module.scss';
import { validate } from './validation';
import { userInput, passInput } from './fields';

const LoginForm = props => {
  const { handleSubmit, reset } = props;
  return (
    <form className={styles.loginItem} onSubmit={handleSubmit}>
      <div className={styles.loginItem}>
        <Field
          name="user"
          component={userInput}
          type="text"
          label="User"
        />
      </div>
      <div className={styles.loginItem}>
        <Field
          name="pass"
          component={passInput}
          type="password"
          label="Password"
        />
      </div>
      <button className={styles.loginButton} type="sumbit">Login</button>
      <button className={styles.loginButton} type="button" onClick={reset}>Clear</button>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'login',
  validate
})(LoginForm);
