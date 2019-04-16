/* eslint-disable react/button-has-type */
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import styles from './styles.module.scss';
import FieldValidation from './validation/index';
import { userInput, passInput } from './fields';

const LoginForm = props => {
  const { handleSubmit, isError } = props;
  return (
    <form className={styles.loginItem} onSubmit={handleSubmit}>
      <div className={styles.loginItem}>
        <Field
          name="user"
          component={userInput}
          type="text"
          label="User"
          validate={[FieldValidation.required, FieldValidation.email]}
        />
      </div>
      <div className={styles.loginItem}>
        <Field
          name="pass"
          component={passInput}
          type="password"
          label="Password"
          validate={FieldValidation.passLenght}
        />
      </div>
      {isError && (
        <div className={styles.errorMsg}>
          {isError}
        </div>
      )}
      <button className={styles.loginButton} type="sumbit">Login</button>
    </form>
  );
};

export default reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);
