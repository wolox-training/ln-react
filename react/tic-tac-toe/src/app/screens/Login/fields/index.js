/* eslint-disable react/no-multi-comp */
import React from 'react';

import styles from '../styles.module.scss';

export const userInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <label className={styles.loginLabel}>{label}</label>
      <input selected className={styles.loginInput} {...input} type={type} />
      {meta.error &&
        meta.touched && (
        <div className={styles.inputError}>{meta.error}</div>
      )}
    </div>
  );
};

export const passInput = props => {
  const { label, input, type, meta } = props;
  return (
    <div>
      <label className={styles.loginLabel}>{label}</label>
      <input className={styles.loginInput} {...input} type={type} />
      {meta.error &&
        meta.touched && (
        <div className={styles.inputError}>{meta.error}</div>
      )}
    </div>
  );
};
