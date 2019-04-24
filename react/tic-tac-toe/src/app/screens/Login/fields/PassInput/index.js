import React from 'react';

import styles from '../../styles.module.scss';

function PassInput(props) {
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
}

export default PassInput;
